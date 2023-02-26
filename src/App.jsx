import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import NwSuccess from "./pages/NwSuccess";
import { useSelector } from "react-redux";
import Security from "./pages/Security";
import Orders from "./pages/Orders";
import BankTransfer from "./pages/NewProduct/BankTransfer";
import SuccessTf from "./pages/SuccessTf";
import OrderConfirmation from "./pages/OrderConfirmation";
import ShippingAddress from "./pages/ShippingAddress";
import ShippingScreen from "./pages/Shipping/ShippingScreen";
import About from "./infocomponents/about/About";
import Intro from "./infocomponents/intro/Intro";
import ProductImage from "./infocomponents/productList/ProductList";
import StepTwo from "./infocomponents/about2/StepTwo";
import StepThree from "./infocomponents/about3/StepThree";
import StepFour from "./infocomponents/about4/StepFour";
import StepFive from "./infocomponents/about5/StepFive";
import StepSix from "./infocomponents/about6/StepSix";
import StepSeven from "./infocomponents/about7/StepSeven";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const confirmedPass = useSelector((state) => state.user.confirmedPassword);
  return (
    <Router>
      <Switch>
        <Route exact path="/client">
          <Home type="normal" />
        </Route>
        <Route exact path="/client/adminpanel">
          {() => {
            window.location.replace("https://diomasaki.github.io/admin");
            return null;
          }}
        </Route>
        <Route path="/client/men">
          <Home type="men" />
        </Route>
        <Route path="/client/women">
          <Home type="women" />
        </Route>
        <Route exact path="/client/profile">
          {user ? <Profile /> : <Redirect to="/client/login" />}
        </Route>
        <Route path="/client/profile/securitysettings">
          {user ? (
            confirmedPass ? (
              <Security />
            ) : (
              <Redirect to="/client/profile" />
            )
          ) : (
            <Redirect to="/client/login" />
          )}
        </Route>
        <Route path="/client/profile/shippingaddress">
          {user ? (
            confirmedPass ? (
              <ShippingAddress />
            ) : (
              <Redirect to="/client/orderconfirmation" />
            )
          ) : (
            <Redirect to="/client/login" />
          )}
        </Route>
        <Route path="/client/profile/orders">
          {user ? <Orders /> : <Redirect to="/client/login" />}
        </Route>
        <Route path="/client/orderconfirmation">
          {user ? <OrderConfirmation /> : <Redirect to="/client/login" />}
        </Route>
        <Route path="/client/newsletterregister">
          {user ? <NwSuccess /> : <Redirect to="/client/login" />}
        </Route>
        <Route path="/client/cart">{user ? <Cart /> : <Redirect to="/client/login" />}</Route>
        <Route path="/client/wishlist">
          {user ? <Wishlist /> : <Redirect to="/client/login" />}
        </Route>
        <Route path="/client/products/:category">
          <ProductList />
        </Route>
        <Route path="/client/payconfirmation">
          <BankTransfer />
        </Route>
        <Route path="/client/shippingdetails">
          <ShippingScreen />
        </Route>
        <Route path="/client/product/:id">
          <Product />
        </Route>
        <Route path="/client/success">
          {user ? <Success /> : <Redirect to="/client" />}
        </Route>
        <Route path="/client/ordersuccessfull">
          {user ? <SuccessTf /> : <Redirect to="/client" />}
        </Route>
        <Route path="/client/login">{user ? <Redirect to="/client" /> : <Login />}</Route>
        <Route path="/client/register">
          {user ? <Redirect to="/client" /> : <Register />}
        </Route>
        <Route path to="/client/information">
          <Intro />
          <About />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
          <StepSix />
          <StepSeven />
          <ProductImage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
