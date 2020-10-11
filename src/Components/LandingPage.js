import React from 'react';
import {Link} from 'react-scroll';
import './../css/landing.css'

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingContainer" id="home">
                <div className="landingContainer-landing">
                    <div className="landingContainer-landing-info">
                        <span className="common">Hey There!</span>
                        <h3 className="common">I'm <span className="myName goldenColor">Suraj Desai</span></h3>
                        <div className="fullstack">Web Developer</div>
                    </div>
                    {/* <div id="toTop">Go to Top</div> */}
                    <div id="toTop">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                        >Top
                        </Link>
                    </div>

                </div>
                <div className="landingContainer-intro">
                        <h2 style={{color:"white",textAlign:"center"}} className="goldenColor">My Skills
                            <div style={{backgroundImage:"linear-gradient(rgba(113, 12, 122, 0.9), rgba(7, 78, 8, 0.9))",padding:"2px",width:"5%",marginLeft:"48%",marginTop:"4px"}}></div>
                        </h2>

                        <div className="progressBars" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                            <div className="meter">
                                <span style={{width: "85%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">JavaScript</div>
                            </div>
                            <div className="meter">
                                <span style={{width: "70%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">C++</div>
                            </div>
                            <div className="meter">
                                <span style={{width: "60%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">React</div>
                            </div>
                            <div className="meter">
                                <span style={{width: "60%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">Express</div>
                            </div>
                            <div className="meter">
                                <span style={{width: "65%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">HTML</div>
                            </div>
                            <div className="meter">
                                <span style={{width: "65%"}}></span>
                                <div style={{color:"white",paddingTop:"20px",fontSize:"20px"}} className="goldenColor">CSS</div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;