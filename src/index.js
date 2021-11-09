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
    <Router forceRefresh={false}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/projects" component={Works} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
