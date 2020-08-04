import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import LandingPage from './LandingPage';
import Education from './Education';
import Projects from './Projects';
const MainRoutes=()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/education" component={Education}/>
            </Switch>
        </div>
    )
}

export default MainRoutes;