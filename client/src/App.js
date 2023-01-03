import './App.css';
import {Route, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Start from './components/Start/Start.js';
import Home from './components/Home/Home.js'
import Countries from './components/Countries/Countries.js';
import CreateActivity from './components/CreateActivity/CreateActivity.js';
//import Activities from './components/Activities/Activities.js';
import ActivityInfo from './components/Activities/ActivityInfo.js';

function App() {
  return (
    <div className="App">
        <div className='image'>
        
          <NavBar/>
          <Route path="/" component={Start} exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/countries/:id" component={Countries} exact/>
          <Route path="/createActivity" component={CreateActivity} exact/>
          {/* <Route path="/activities" component={Activities} exact/> */}
          <Route path="/activity/:id" component={ActivityInfo} exact/>  
      
      
      
      
      
      
      

      {/* <Activity/> */}
      {/* <Countryb/> */}
      </div>
    </div>
  );
}

export default App;
