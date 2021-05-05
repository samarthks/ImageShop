import React, { Component } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/NavBar";
const queryClient = new QueryClient();
const stripePromise = loadStripe("");
class App extends Component {
  render(){
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="CAD"
      >
        <BrowserRouter>
        <Navbar />
        <Toaster position="top-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/paymentconfirmation"
              component={PaymentConfirmation}
            />
            <Route path="/:productId" component={Products} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}
}
export default App;
