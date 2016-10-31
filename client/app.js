import React from 'react'
import ReactDOM from 'react-dom'
import { Router,
  applyRouterMiddlewar } from 'react-router'
import { Provider } from 'react-redux'
import { stores, history } from 'stores'
import { createHistory,
  useBasename } from 'history'

import RootWrapper from 'wrapper/RootWrapper'

const combineRoutes = require('routes')

const rootRoutes = {
  path: '/',
  // indexRoute: { onEnter: (nextState, replace) => replace(urljoin(nextState.location.pathname, 'home')) },
  component: RootWrapper,
  childRoutes: combineRoutes
}

/** ReactDOM Rendering */
ReactDOM.render(
  <Provider store={stores}>
    <Router
      history={history}
      routes={rootRoutes}>
    </Router>
  </Provider>,
  document.getElementById('app__container'))
