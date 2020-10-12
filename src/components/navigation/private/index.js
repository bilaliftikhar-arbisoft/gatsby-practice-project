import React, { Fragment } from "react"
import { Link } from "@reach/router";

import { routes } from "./routes";

const basePath = '/app'

export const NavPrivate = () =>
  <Fragment>
    {routes.map(route => route.enabled &&
      <Link to={basePath + route.path}>{route.name}
      </Link>)}
  </Fragment>
