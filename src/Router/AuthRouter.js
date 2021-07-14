import { Route, Switch } from "react-router";
import Login from "../Screens/Auth/Login/Login";
import Register from "../Screens/Auth/Register/Register";
import Review from "../Components/Review/Review"

const AuthRouter = () => {
  return [
    <Route key={10}
      path={"/login"}
      component={() => {
        return <Login />;
      }}
    />,
    <Route key={20}
      path={"/register"}
      component={() => {
        return <Register />;
      }}
    />,
  ];
};
export default AuthRouter;
