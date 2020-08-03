import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import LandingPage from './LandingPage';
import Contact from './Contact';
const MainRoutes=()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
        </div>
    )
}

export default MainRoutes;