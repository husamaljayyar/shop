import { lazy } from "react";
import { Route } from "react-router";

const HomeScreen = lazy(() => import("../Screens/Guest/HomeScreen/HomeScreen"));
const ProductScreen = lazy(() => import("../Screens/Guest/ProductScreen/ProductScreen"));
const CartScreen = lazy(() => import("../Screens/User/CartScreen/CartScreen"));
const SearchScreen = lazy(() => import("../Screens/Guest/SearchScreen/SearchScreen"));

 

const GuestRouter = () => {
  return [
    <Route key={40} path={"/"} exact={true} component={HomeScreen} />,
    <Route
      key={50}
      path={"/product/:id/:name"} // now click go "/product/:id/:name" - not: need pass id and name
      exact={true}
      component={ProductScreen}
    />,
    <Route key={60} path={"/cart"} exact={true} component={CartScreen} />,
    <Route key={70} path={"/search"} exact={true} component={SearchScreen} />,
  ];
};
export default GuestRouter;
