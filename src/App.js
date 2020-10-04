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
            <Header className="header--color" title="Desai Suraj Ankush" scroll>
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/education">Education</Link>
                  <Link to="/projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/education">Education</Link>
                  <Link to="/projects">Projects</Link>
              </Navigation>
            </Drawer>
            <Content>
              {/* <div className="page-content" /> */}
              <MainRoutes/>
            </Content>
        </Layout>
      </div>
    )
  }
}
export default App;
