import './App.css';
import Watchlist from './views/watchlist';
import Login from './views/login';
import Tabs from './components/tabs';
import Header from './components/header';
import Search from './components/search';
import MediaDetails from './views/mediaDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './state/store';
import { Provider } from 'react-redux';


function App() {

  //https://coolors.co/ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0
  
  return (
    <Provider store={store}>
      <div className="App" style={{ paddingTop: '100px' }}>
        <Router>
          <Header />
          <Tabs />
          <Switch>
            <Route path="/watchlist">
              <Watchlist />
            </Route>
            <Route path="/find">
              <Search />
            </Route>
            <Route path="/view-details/:id">
              <MediaDetails />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
          

          {/* {viewportSize.width < breakpoints.md &&
            <Tabs />
          } */}
        </Router>
      </div>
    </Provider>
   );
}

export default App;
