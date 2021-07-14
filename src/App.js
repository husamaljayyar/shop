import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import AuthRouter from "./Router/AuthRouter";
import GuestRouter from "./Router/GuestRouter";
import UserRouter from "./Router/UserRouter";
import NotFoundSceen from "./Screens/Guest/NotFoundSceen/NotFoundSceen";

const App = () => {
  const state = useSelector((state) => state);
  console.log("store state", state);

  return (
    <MainContainer> 
      <NavBar />
      <Switch>
        {GuestRouter()}
        {/* Protected Route */}
        {state.userDetails.user._id ? UserRouter() : AuthRouter()}
        
       <Route key={10} path={"*"}>
        <NotFoundSceen />
      </Route> 
      </Switch>
    </MainContainer>
  );
};

export default App;
