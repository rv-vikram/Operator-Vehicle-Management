import './App.css';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Main />
    </div>
  );
}

export default App;
