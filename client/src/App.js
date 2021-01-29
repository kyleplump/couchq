import './App.css';
import useViewportSize from './hooks/useViewportSize';
import { breakpoints } from './constants';
import Watchlist from './views/watchlist';
import Tabs from './components/tabs';
import Search from './components/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const viewportSize = useViewportSize();
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>


        {viewportSize.width < breakpoints.md &&
          <Tabs />
        }
      </Router>
    </div>
  );
}

export default App;
