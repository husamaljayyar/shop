import { SpinnerContainer, Typography } from "../../../App.Styles";
import Button from "../../../Components/Button/Button";
import { Formik } from "formik";
import { updateProfileSchema } from "../../../Valedation";
import { MainContainer, Container } from "./UpdateProfileScreen.Styles";
import {
  ErrorMsg,
  Input,
  Forms,
} from "../../../Components/FormInput/FormInput.Styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileAction,
  updateProfileAction,
} from "../../../Redux/User/userActions";
import { useHistory } from "react-router";

function UpdateProfileScreen(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(updateProfileAction(values, history));
  };

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <MainContainer>
      <Container>
        <Typography fontWeight={700} fontSize={32}>
          My Profile
        </Typography>

        <Formik
          initialValues={{
            email: state.userDetails.userProfile?.user?.email,
            password: "",
            passwordConfirmation: "",
            name: state.userDetails.userProfile?.user?.name,
          }}
          validationSchema={updateProfileSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input
                  name={"name"}
                  type={"name"}
                  placeholder={"Name"}
                  MarginLeft
                />
                {errors.name && touched.name ? (
                  <ErrorMsg>{errors.name}</ErrorMsg>
                ) : null}

                <Input
                  name={"email"}
                  type={"email"}
                  placeholder={"Email"}
                  MarginLeft
                />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                  MarginLeft
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                <Input
                  name={"passwordConfirmation"}
                  type={"password"}
                  placeholder={"Confirmation password"}
                  MarginLeft
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <ErrorMsg>{errors.passwordConfirmation}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  isLoading={isLoading}
                  text={"Update Profile"}
                  width={"220px"}
                  borderRadius={6}
                  style={{ margin: "10% 25%" }}
                />
              </Forms>
            ); 
          }}
        </Formik>
      </Container>
    </MainContainer>
  );
}

export default UpdateProfileScreen;
