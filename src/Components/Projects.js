import React from 'react';
import {Card,CardActions,CardText,CardTitle,Button} from 'react-mdl';

class Projects extends React.Component{
    render(){
        return(
            <div className="projectContainer">
                <h2>
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Projects
                </h2>
                <hr/>
              <div className="projectInnerContainer">
                <Card shadow={0} style={{width: 'auto'}} className="projectContainer1 project">
                    <CardTitle style={{color: '#fff', height: 'auto', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Merchant customer
                    interface for payment</CardTitle>
                    <CardText>
                        <ul style={{fontSize:"medium"}}>
                            <li>Developed a model for multiple payments</li>
                            <li>Consumed  PaySafe API</li>
                            <li>Tech-Stack : React, Express, MongoDB</li>
                        </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </Button>
                        <Button colored>
                        <a href="https://github.com/suraj-desai/Merchant_Customer_Model" target="_blank" rel="noopener noreferrer">Github</a>
                        </Button>
                    </CardActions>
                    {/* <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
                <Card shadow={0} style={{width: 'auto'}} className="projectContainer2 project">
                    <CardTitle style={{color: '#fff', height: 'auto', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Personal Portfolio Website</CardTitle>
                    <CardText>
                        <ul style={{fontSize:"medium"}}>
                            <li>Developed a personal portfolio website </li>
                            
                            <li>Tech-Stack : React, react-mdl</li>
                        </ul>
                    </CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </Button>
                        <Button colored>
                        <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">Github</a>
                        </Button>
                    </CardActions>
                    {/* <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
                <Card shadow={0} style={{width: 'auto'}} className="projectContainer3 project">
                    <CardTitle style={{color: '#fff', height: 'auto', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>A To-Do App</CardTitle>
                    <CardText>
                        <ul style={{fontSize:"medium"}}>
                            <li>Developed a To-Do app </li>
                            <li>App provides multiple cards with multiple lists</li>
                            <li>Tech-Stack : React, Express, MongoDB</li>
                        </ul>
                    </CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">project Link</a>
                        </Button>
                        <Button colored>
                        <a href="https://desolate-taiga-54191.herokuapp.com/" target="_blank" rel="noopener noreferrer">Github</a>
                        </Button>
                    </CardActions>
                    {/* <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
              </div>
            </div>
        )
    }
}

export default Projects;