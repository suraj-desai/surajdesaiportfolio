import React from 'react';
import './../css/education.css';
class About extends React.Component{
    render(){
        return(
          <div className="educationContainer" id="about"> 
            <div className="education ">
                <section className="educationBlock">
                    <h2>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        About Me
                    
                    </h2>
                    <hr/>
                    <p>
                        Prolific, 2020 undergraduate from IIIT Manipur with a passion for software development.
                        Participate in coding Competitions and have strong knowledge of Data structures and algorithms.
                        Really passionate about building world class web applications. 
                    </p>
                    <div>
                        <div className="info">
                            <p className="firstInfo">Age.....</p>
                            <p>22</p>
                        </div>
                        <div className="info">
                            <p className="firstInfo">Residence.....</p>
                            <p>Sangli, Maharashtra</p>
                        </div>
                        <div className="info">
                            <p className="firstInfo">Email.....</p>
                            <p>desaisuraj678@gmail.com</p>
                        </div>
                        <div className="info">
                            <p className="firstInfo">Graduation Year.....</p>
                            <p>2020</p>
                        </div>
                        
                    </div>
                </section>
                <section className="educationBlock">
                    <h3>Highlights</h3>
                    <hr/>
                    <div>
                        <ul>
                            <li>Delivered projects in the field of web and electronics</li>
                            <li>Solid grasp on Data structures and algorithms</li>
                            <li>A scaler academy student, solved more than 350 coding problems on Interviewbit(Scaler)</li>
                            <li>Achieved 251 global rank in hackerearth long challenge</li>
                            <li>CodeChef highest rating : 1702</li>
                        </ul>
                    </div>
                </section>
                <hr/>
            </div>
          </div> 
        )
    }
}

export default About;