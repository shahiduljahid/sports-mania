import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import NoMatch from "./NoMatch/NoMatch";
import TeamDetails from "./TeamDetails/TeamDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact="true" path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
           
            <Home></Home>
          </Route>
          <Route path="/team/:leaugeId">
         
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
