import React from "react";
import  {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {

  render(){

    return (
      <div id="parent">

      <Router history={browserHistory}>
      <Route path={"/"} component={Root}>
      <IndexRoute component={Home}/>
      <Route path={"user"} name = "Daniel" component={User} />
      <Route path={"home"} component={Home} />

      </Route>
      </Router>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
