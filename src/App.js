import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./Layout";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import ProductDetailPage from "./pages/ProductDetailPage";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
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
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
