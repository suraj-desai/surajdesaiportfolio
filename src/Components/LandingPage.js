import React from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{width:'100%',margin:"auto"}}>
                <Grid className="landingContainer">
                    <Cell col={12} className="landingContainer__cell">
                        <img
                        // src={require("../static/avatar.png")}
                        src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
                        alt="Avatar"
                        className="avatar"
                        />
                        <div className="landingContent">
                            <h1>Full Stack Developer</h1>
                            <p> JavaScript | Ds and algo | HTML/CSS | C++ | React | Express.js </p>
                            <hr/>
                            <div className="socialLinks">

                                <a href="https://www.linkedin.com/in/suraj-desai-621347142/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" arai-hidden="true"/>
                                </a>
                                <a href="https://github.com/suraj-desai" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" arai-hidden="true"/>
                                </a>
                                <a href="https://bitbucket.org/suraj-desai/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-bitbucket-square" arai-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;