import './App.css';
import useViewportSize from './hooks/useViewportSize';
import { breakpoints } from './constants';
import Tabs from './components/tabs';
import Search from './components/search';
import Test from './components/test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const viewportSize = useViewportSize();
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            <Test />
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
