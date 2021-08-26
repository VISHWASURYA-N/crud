import React from 'react'
import {  BrowserRouter as Router,Route,Switch,} from "react-router-dom"
import'bootstrap/dist/css/bootstrap.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AddUser from './pages/Adduser';
import EditUser from './pages/editUser';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/adduser" component={AddUser}/>
          <Route exact path="/EditUser:id" component={EditUser}/>

          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
