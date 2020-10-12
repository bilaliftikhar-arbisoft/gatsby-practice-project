import React, { Fragment } from "react"
import { Link } from "@reach/router";

export const NavPrivate = () =>
  <Fragment>
    <Link to='/app/profile'>Profile</Link>
    <Link to='/app/login'>Logout</Link>
  </Fragment>
