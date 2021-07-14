import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../Redux/User/userActions";
import { Typography, BorderLine } from "../../../App.Styles";
import { FormBox, StyledImage } from "../Login/Login.Styles";
import { Formik } from "formik";
import { registerSchema } from "../../../Valedation";
import {
  ErrorMsg,
  Input,
  Forms,
} from "../../../Components/FormInput/FormInput.Styles";
import { TypographyText, MainContainer } from "./Register.Styles";
import Button from "../../../Components/Button/Button";
import Images from "../../../Assets/Group421.png";
import { Link } from "react-router-dom";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(registerAction(values, history));
  };

  return (
    <MainContainer>
      <FormBox>
        <TypographyText
          margin={"44px 0 20px 0"}
          fontSize={60}
          fontWeight={900}
          color={"#242424"}
        >
          Register.
        </TypographyText>
        <TypographyText
          margin={"5px 0 30px 0"}
          fontSize={28}
          color={"#707070"}
          fontWeight={700}
        >
          Sign up and get exclusive offers from us
        </TypographyText>

        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: "",
            name: "",
          }}
          validationSchema={registerSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input name={"name"} type={"name"} placeholder={"Name"} />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

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

                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"Confirmation password"}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}
                {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                <Button
                  isLoading={isLoading}
                  text={"Sign up"}
                  width={"100%"}
                  borderRadius={6}
                />
              </Forms>
            );
          }}
        </Formik>
        <Typography fontSize={22} color={"#242424"}></Typography>
        <BorderLine MarginTop />
        <Typography fontSize={22} color={"#707070"}>
          Have an account ? <Link to={"/login"}>Login</Link>
        </Typography>
      </FormBox>
      <StyledImage src={Images} />
    </MainContainer>
  );
}

export default Register;
