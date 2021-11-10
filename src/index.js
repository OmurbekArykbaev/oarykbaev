import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Works from "./pages/Works"
import { Route } from "react-router"
import App from "./App"

import "./scss/reset.css"
import "./scss/app.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/projects" exact component={Works} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
