import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from "../static/avatar.png";

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{width:'100%',margin:"auto"}}>
                <Grid className="landingContainer">
                    <Cell col={12} className="landingContainer__cell">
                        <img
                        scr={Avatar}
                        alt="Avatar"
                        className="avatar"
                        />
                        <div className="landingContent">
                            <h1>FullStack Developer</h1>
                            <p> C++ | DS and algo | HTML/CSS | JavaScript | React | Express.js </p>
                            <hr/>
                            <div className="socialLinks">
                                <a href="">

                                </a>
                                <a href="">

                                </a>
                                <a href="">

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