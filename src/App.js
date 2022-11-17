import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import Recommendedvideo from './Recommendedvideo';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
 function App() {
  return (
    <div className="App">
    {/* <Router> */}
      {/* <Switch>
<Route path='/search'>
    <h1>Search Page</h1>
</Route>
<Route path='/'>
    <h1>Home Page</h1>
</Route>
<Route path='/'>
    <h1>Home Page</h1>
</Route>
      </Switch>
    </Router> */}
    
 <Header/> 
    <div className='app_page'>
    <Sidebar/>
    <Recommendedvideo />
    </div>

    </div>
  );
}

export default App;
