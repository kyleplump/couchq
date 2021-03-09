import './App.css';
import Watchlist from './views/watchlist';
import Login from './views/login';
import Tabs from './components/tabs';
import Header from './components/header';
import Search from './components/search';
import MediaDetails from './views/mediaDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { Provider } from 'react-redux';
import store from './state/store';
import { setIsAuthenticated, setAuthToken } from './state/actionCreators';
import { useEffect } from 'react';
import AuthService from './services/AuthService';


function App() {

  const requireLoginGuard = (to, from, next) => {

    if(to.meta.auth) {

      const authService = AuthService.getInstance();

      const authToken = authService.getJWT();

      if(authToken) {
        next();
      }
      else {
        next.redirect('/login');
      }
    }
    else {
      next();
    }
  }

  //https://coolors.co/ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0
  
  return (
      <Provider store={store}>
        <div className="App" style={{ paddingTop: '100px' }}>
          <Router>
            <GuardProvider guards={[ requireLoginGuard ]}>
              {/* conditionally render header / tabs */}
              <Switch>
                <GuardedRoute exact path="/login">
                </GuardedRoute>
                <GuardedRoute path="/" meta={{ auth: true }}>
                  <Header />
                  <Tabs />
                </GuardedRoute>
              </Switch>
              <Switch>
                <GuardedRoute exact path="/watchlist" meta={{ auth: true }}>
                  <Watchlist />
                </GuardedRoute>
                <GuardedRoute exact path="/find" meta={{ auth: true }}>
                  <Search />
                </GuardedRoute>
                <GuardedRoute exact path="/view-details/:id" meta={{ auth: true }}>
                  <MediaDetails />
                </GuardedRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <GuardedRoute exact path="/" meta={{ auth: true }}>
                  <Watchlist />
                </GuardedRoute>
              </Switch>

              {/* {viewportSize.width < breakpoints.md &&
                <Tabs />
              } */}
            </GuardProvider>
          </Router>
        </div>
      </Provider>
  );
}

export default App;
