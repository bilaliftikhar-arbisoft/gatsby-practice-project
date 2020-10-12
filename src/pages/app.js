import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import Login from "../components/login"
import Profile from "../components/profile"
import PrivateRoute from "../routes";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/login" component={Login} />
      </Router>
    </Layout>
  )
}

export default App
