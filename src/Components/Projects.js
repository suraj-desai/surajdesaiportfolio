import React from 'react';
import {Card,CardActions,CardText,CardTitle,Button} from 'react-mdl';
import './../css/projects.css';
class Projects extends React.Component{
    render(){
        return(
            <div className="projectContainer" id="projects">
                <h2>
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    Projects
                </h2>
                <hr/>
              <div className="projectInnerContainer">
                <section className="projectContainer1 project">
                    Merchant customer
                    interface for payment
                        <ul >
                            <li>Developed a model for multiple payments</li>
                            <li>Consumed  PaySafe API</li>
                            <li>Tech-Stack : React, Express, MongoDB</li>
                        </ul>
                    <div>
                        <button type="submit">
                            <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </button>
                        <button type="submit">
                            <a href="https://github.com/suraj-desai/Merchant_Customer_Model" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </section>
                <section className="projectContainer2 project">
                    Personal Portfolio Website
            
                        <ul style={{fontSize:"medium"}}>
                            <li>Developed a personal portfolio website </li>
                            
                            <li>Tech-Stack : React, react-mdl</li>
                        </ul>
                
                    <div>
                        <button type="submit">
                            <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </button>
                        <button type="submit">
                            <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </section>
                <section className="projectContainer3 project">
                    A To-Do App
                    
                        <ul>
                            <li>Developed a To-Do app </li>
                            <li>App provides multiple cards with multiple lists</li>
                            <li>Tech-Stack : React, Express, MongoDB</li>
                        </ul>
                
                    <div>
                        <button type="submit">
                            <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </button>
                        <button type="submit">
                            <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">Github</a>
                        </button>
                    </div>
                </section>
              </div>
            </div>
        )
    }
}

export default Projects;