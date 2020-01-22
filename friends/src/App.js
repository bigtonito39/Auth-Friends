import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login";
import ListOfFriends from "./components/ListOfFriends";
import AddAfriend from "./components/AddAfriend";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    
   <Router>
<div className="App">

<div className="NavDiv">
<h1>Welcome to your friends Token protected API POST/ GET Project</h1>
<Link to="/login" className="nav">Login</Link>
<Link to="/protected" className="nav">Friends</Link>
<Link to="/newfriend" className="nav">Add a friend</Link>
</div>
<Switch>
  <ProtectedRoute exact path="/protected" component={ListOfFriends}/>
  <Route path="/login" component={Login}/>
  <Route path="/newfriend" component={AddAfriend} />
</Switch>
</div>

   </Router>
  );
}

export default App;
