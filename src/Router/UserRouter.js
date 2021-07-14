import { Route } from "react-router";
import ProfileScreen from "../Screens/User/ProfileScreen/ProfileScreen";
import UpdateProfileScreen from "../Screens/User/UpdateProfileScreen/UpdateProfileScreen";
import PaymentActivity from "../Screens/User/Payment/PaymentActivity/PaymentActivity";
import EmptyCart from "../Screens/User/Shopping/EmptyCart/EmptyCart";
import Payment from "../Screens/User/Payment/Payment";
import Order from "../Screens/User/Order/Order"
import Orders from "../Screens/User/Orders/Orders";

const UserRouter = () => {
  return [
    <Route key={1} path={"/Payment-activity"} component={PaymentActivity} />,
    <Route key={2} path={"/profile"} exact={true} component={ProfileScreen} />,
    <Route
      key={3}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfileScreen}
    />,
    <Route
      key={3}
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={4}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
    <Route key={5} path={"/EmptyCart"} exact={true} component={EmptyCart} />,
    <Route key={50} path={"/order/:id"} exact={true} component={Order} />,
    <Route key={6} path={"/Orders"} exact={true} component={Orders} />
  ];
};

export default UserRouter;
