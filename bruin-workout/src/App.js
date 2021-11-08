import './styles/App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Planner';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div className="Login">
        <Login />
      </div>
      <div className="Signup">
        <Signup />
      </div>
      <div className="Home">
        <Home />
      </div>
      <div className="Profile">
        <Profile />
      </div>
    </div>
  );
}

export default App;
