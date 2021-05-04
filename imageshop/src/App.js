
 import React from "react";
 import Home from "./pages/Home";
 import Products from "./pages/Products";
 import PaymentConfirmation from "./pages/PaymentConfirmation";
 import { BrowserRouter, Switch, Route } from 'react-router-dom'

 import { QueryClientProvider, QueryClient } from 'react-query'

 const queryClient = new QueryClient();

 function App() {
   return (
<QueryClientProvider client={queryClient}>
     <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/paymentconfirmation" component={PaymentConfirmation} />
         <Route path="/:productId" component={Products} />
       </Switch>
     </BrowserRouter>
     </QueryClientProvider>
   )
 }

 export default App;