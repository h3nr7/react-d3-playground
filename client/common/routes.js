import Main from 'container/Main'

module.exports = [
  {
    path: '/main',
    // indexRoute: { onEnter: (nextState, replace) => replace(urljoin(nextState.location.pathname, 'home')) },
    component: Main,
    // childRoutes: combineRoutes
  }
]
