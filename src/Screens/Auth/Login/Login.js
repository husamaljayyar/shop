import { BorderLine, InnerSection, Typography } from "../../../App.Styles";
import {
  FormBox,
  StyledImage,
  MainContainer,
  TypographyText,
  Container,
} from "./Login.Styles";
import Images from "../../../Assets/Group240.png";
import Button from "../../../Components/Button/Button";
import {
  ErrorMsg,
  Forms,
  Input,
} from "../../../Components/FormInput/FormInput.Styles";
import { Formik } from "formik";
import { loginSchema } from "../../../Valedation";
import { useHistory } from "react-router";
import { loginAction } from "../../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";

const styles = {
  height: "56px",
  border: "3px solid #FCDD06",
  background: "#fff",
  fontSize: "22px",
  cursor: "pointer",
};

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const error = state.userDetails.error; // Take "userDetails.error" from  store
  const isLoading = state.userDetails.isLoading;

  // onClick or Submit work Run by dispatch
  // Run by sending (values, history) to action
  const handleSaveChanges = async (values) => {
    dispatch(loginAction(values, history));
  };

  return (
    <MainContainer>
      <FormBox>
        <TypographyText fontSize={60} fontWeight={900}>
          Login
        </TypographyText>
        <Typography fontSize={32} color={"#707070"}>
          Login with your data that you entered during registration
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input name={"email"} type={"email"} placeholder={"Email"} />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  isLoading={isLoading}
                  width={"100%"}
                  borderRadius={6}
                  text={"Login"}
                  height={40}
                  
                />
              </Forms>
            );
          }}
        </Formik>

        <Container>
          <TypographyText fontSize={22} color={"#242424"}>
            Forgot your password?
          </TypographyText>
          <BorderLine />
          <Button
            link={"/register"}
            width={"220px"}
            borderRadius={20}
            text={"Sign up now"}
            style={styles}
          />
        </Container>
      </FormBox>
      <StyledImage src={Images} />
    </MainContainer>
  );
}

export default Login;
