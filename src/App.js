import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          {/*<Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>*/}

          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/product/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
