import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mangkir App will be developed here! Just wait 🥶
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function getData() {
  return fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .catch(e => {
      console.error(e)
    });
}

export default App;
