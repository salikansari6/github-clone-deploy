import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Route from './components/Route';
import Login from './components/Login/Login';
import LoginCallback from './components/LoginCallback';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Login/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>   
      </Route>
      <Route path="/login/callback">
        <LoginCallback/>
      </Route>
    </div>
  );
}

export default App;
