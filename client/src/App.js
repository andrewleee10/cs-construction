import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Fragment } from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
// import Message from './pages/Message'
import Navbar from './components/Navbar'
// import Footer from './components/stickyFooter'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return (localStorage.getItem('user') !== 'null' && localStorage.getItem('user') !== null)
        ? children
        : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }}
        />
    }} />
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Fragment>
            <Navbar />
            {/* <PrivateRoute exact path='/'>
              <Home />
            </PrivateRoute>
            <PrivateRoute path='/profile' component={() => <Profile key={Math.random()} />} />
            <PrivateRoute path='/message'>
                <Message />
            </PrivateRoute>
            <Footer /> */}
          </Fragment>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
