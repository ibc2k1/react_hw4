import logo from './logo.svg';
import './App.css';
import Users from './UserGithub.js';

function App() {
  return (
    <div className="App">
        <div>{ Users() }</div>
    </div>
  );
}

export default App;
