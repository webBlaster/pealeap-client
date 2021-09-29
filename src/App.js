import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Overview from "./pages/overview.js";
import Settings from "./pages/settings.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/overview" exact component={Overview} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
