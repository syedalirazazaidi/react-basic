import React, { Component } from 'react'
import App3 from './component/router'
import Home from './component/Home'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <Router>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/">
            <App3 />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> */}
         <Route exact path="/" component={App3} />
        <Route path="/home" component={Home} />
    </Router>
    )
  }
}

export default App;

