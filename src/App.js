import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subscribe" exact component={Subscribe} />
        <Route path="/overview" exact component={Overview} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/create.invoice" exact component={CreateInvoice} />
        <Route path="/paywall" exact component={Paywall} />
        <Route path="/confirmation" exact component={Confirmation} />
        <Route path="/paidinvoice" exact component={PaidInvoice} />
        <Route path="/pendinginvoice" exact component={PendingInvoice} />
        <Route path="/invoice" exact component={Invoice} />
        <Route path="/giftfriends" exact component={GiftFriends} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
