import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Overview from "./pages/overview.js";
import Settings from "./pages/settings.js";
import Subscribe from "./pages/subscribe.js";
import Transactions from "./pages/transactions.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/subscribe" exact component={Subscribe} />
        <Route path="/overview" exact component={Overview} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/transactions" exact component={Transactions} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
