import React from 'react';
import './App.css';
import './Components/LandingPage';
import LandingPage from './Components/LandingPage';
import MainRoutes from './Components/MainRoutes';
import Projects from './Components/Projects';
import About from './Components/About';
import Education from './Components/Education';

class App extends React.Component{
  render(){
    return (
      <div>
              <MainRoutes/>
              <LandingPage/>
              <About/>
              <Education/>
              <Projects/>
      </div>
    )
  }
}
export default App;
