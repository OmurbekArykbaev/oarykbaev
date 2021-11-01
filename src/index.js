import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Works from "./pages/Works"
import { Route } from "react-router"
import App from "./App"

import "./index.css"
import "./scss/reset.css"
import "./scss/app.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/works" exact component={Works} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
