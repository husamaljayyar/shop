import { lazy } from "react";
import { Route } from "react-router";

const Login = lazy(() => import("../Screens/Auth/Login/Login"));
const Register = lazy(() => import("../Screens/Auth/Register/Register"));

const AuthRouter = () => {
  return [
    <Route
      key={10}
      path={"/login"}
      component={() => {
        return <Login />;
      }}
    />,
    <Route
      key={20}
      path={"/register"}
      component={() => {
        return <Register />;
      }}
    />,
  ];
};
export default AuthRouter;
