import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import MainRoutes from './Components/MainRoutes'
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header--color" title="Title" scroll>
                <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <MainRoutes/>
            </Content>
        </Layout>
      </div>
    )
  }
}
export default App;
