import React from "react";
import "./App.css";
import Appmenu from "./QuickView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Appmenu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
