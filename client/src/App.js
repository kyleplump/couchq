import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function clickHandler() {
  axios.get('http://localhost:3001/api/users').then((resp) => {
    console.log('got res: ', resp.data);
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => clickHandler()}>
        click me
      </button>
      </header>

    </div>
  );
}

export default App;
