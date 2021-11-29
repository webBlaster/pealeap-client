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
import Terms from "./pages/terms.js";

function App() {
  let isAuthenticated = useSelector((state) => state.userAuth.isAuthenticated);
  let isProfileUpdated = useSelector(
    (state) => state.userAuth.isProfileUpdated
  );
  return (
    <Router>
      <ResponseAlert />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/terms" exact component={Terms} />
        <PrivateRoute
          path="/subscribe"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={Subscribe}
        />
        <PrivateRoute
          path="/overview"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={Overview}
        />
        <PrivateRoute
          path="/settings"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={Settings}
        />
        <PrivateRoute
          path="/transactions"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={Transactions}
        />
        <PrivateRoute
          path="/create.invoice"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={CreateInvoice}
        />
        <Route path="/paywall/:uuid/:useruuid" exact component={Paywall} />
        <Route path="/confirmation" exact component={Confirmation} />
        <PrivateRoute
          path="/paidinvoice/:uuid"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={PaidInvoice}
        />
        <PrivateRoute
          path="/pendinginvoice/:uuid"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={PendingInvoice}
        />
        <Route path="/invoice/:uuid" exact component={Invoice} />
        <Route
          path="/giftfriends/:uuid/:useruuid"
          exact
          component={GiftFriends}
        />
        <PrivateRoute
          path="/lead/:uuid"
          exact
          isProfileUpdated={isProfileUpdated}
          isAuthenticated={isAuthenticated}
          component={Lead}
        />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
