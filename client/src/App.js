import './App.css';
import useViewportSize from './hooks/useViewportSize';
import { breakpoints } from './constants';
import Watchlist from './views/watchlist';
import Tabs from './components/tabs';
import Header from './components/header';
import Search from './components/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  //https://coolors.co/ed6a5a-f4f1bb-9bc1bc-5ca4a9-e6ebe0

  const viewportSize = useViewportSize();
  
  return (
    <div className="App" style={{ paddingTop: '100px' }}>
      <Router>
        <Header />
        <Tabs />
        <Switch>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>


        {/* {viewportSize.width < breakpoints.md &&
          <Tabs />
        } */}
      </Router>
    </div>
  );
}

export default App;
