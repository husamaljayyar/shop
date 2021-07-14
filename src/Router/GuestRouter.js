import HomeScreen from "../Screens/Guest/HomeScreen/HomeScreen";
import ProductScreen from "../Screens/Guest/ProductScreen/ProductScreen";
import CartScreen from "../Screens/User/CartScreen/CartScreen";
import SearchScreen from "../Screens/Guest/SearchScreen/SearchScreen"
import { Route } from "react-router";

const GuestRouter = () => {
  return [
    <Route key={40} path={"/"} exact={true} component={HomeScreen} />,
    <Route key={50}
      path={"/product/:id/:name"} // now click go "/product/:id/:name" - not: need pass id and name
      exact={true}
      component={ProductScreen}
    />,
    <Route key={60} path={"/cart"} exact={true} component={CartScreen} />,
    <Route key={70} path={"/search"} exact={true} component={SearchScreen} />
  ];
};
export default GuestRouter;
