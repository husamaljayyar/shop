import { lazy } from "react";
import { Route } from "react-router";

const ProfileScreen = lazy(() => import("../Screens/User/ProfileScreen/ProfileScreen"));
const UpdateProfileScreen = lazy(() => import("../Screens/User/UpdateProfileScreen/UpdateProfileScreen"));
const PaymentActivity = lazy(() => import("../Screens/User/Payment/PaymentActivity/PaymentActivity"));
const EmptyCart = lazy(() => import("../Screens/User/Shopping/EmptyCart/EmptyCart"));
const Payment = lazy(() => import("../Screens/User/Payment/Payment"));
const Order = lazy(() => import("../Screens/User/Order/Order"));
const Orders = lazy(() => import("../Screens/User/Orders/Orders"));

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
    <Route key={6} path={"/Orders"} exact={true} component={Orders} />,
  ];
};

export default UserRouter;
