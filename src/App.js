import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Route from './components/Route';
import Login from './components/Login/Login';
import LoginCallback from './components/LoginCallback';
import Navbar from './components/common/Navbar/Navbar';
import React,{useContext} from 'react';
import SearchScreen from './components/SearchScreen/SearchScreen';
import { LoginContext } from './contexts/LoginContext';

function App() {
    const {showNavbar} = useContext(LoginContext)
    return (
    <div className="App container-fluid p-0">
      {
        showNavbar &&
        <Navbar />
      }
      <Route path="/">
        <Login />
      </Route>
      <Route path="/search-screen">
        <SearchScreen/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>   
      </Route>
      <Route path="/login/callback">
        <LoginCallback />
      </Route>
    </div>
  );
}

export default App;
