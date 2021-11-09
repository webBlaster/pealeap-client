import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/privateroute.js";
import ResponseAlert from "./components/response.js";
import Home from "./pages/home.js";
import Overview from "./pages/overview.js";
import Settings from "./pages/settings.js";
import Subscribe from "./pages/subscribe.js";
import Paywall from "./pages/paywall.js";

import Transactions from "./pages/transactions.js";
import Confirmation from "./pages/confirmation.js";
import CreateInvoice from "./pages/createinvoice.js";
import PaidInvoice from "./pages/paidinvoice.js";
import PendingInvoice from "./pages/pendinginvoice.js";
import Invoice from "./pages/invoice.js";
import GiftFriends from "./pages/giftfriends.js";
import Lead from "./pages/lead.js";

function App() {
  let isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);
  return (
    <Router>
      <ResponseAlert />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute
          path="/subscribe"
          exact
          isAuthenticated={isAuthenticated}
          component={Subscribe}
        />
        <PrivateRoute
          path="/overview"
          exact
          isAuthenticated={isAuthenticated}
          component={Overview}
        />
        <PrivateRoute
          path="/settings"
          exact
          isAuthenticated={isAuthenticated}
          component={Settings}
        />
        <PrivateRoute
          path="/transactions"
          exact
          isAuthenticated={isAuthenticated}
          component={Transactions}
        />
        <PrivateRoute
          path="/create.invoice"
          exact
          isAuthenticated={isAuthenticated}
          component={CreateInvoice}
        />
        <PrivateRoute
          path="/paywall"
          exact
          isAuthenticated={isAuthenticated}
          component={Paywall}
        />
        <PrivateRoute
          path="/confirmation"
          exact
          isAuthenticated={isAuthenticated}
          component={Confirmation}
        />
        <PrivateRoute
          path="/paidinvoice/:uuid"
          exact
          isAuthenticated={isAuthenticated}
          component={PaidInvoice}
        />
        <PrivateRoute
          path="/pendinginvoice/:uuid"
          exact
          isAuthenticated={isAuthenticated}
          component={PendingInvoice}
        />
        <Route path="/invoice/:uuid" exact component={Invoice} />
        <PrivateRoute
          path="/giftfriends"
          exact
          isAuthenticated={isAuthenticated}
          component={GiftFriends}
        />
        <PrivateRoute
          path="/lead"
          exact
          isAuthenticated={isAuthenticated}
          component={Lead}
        />
        <PrivateRoute component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
