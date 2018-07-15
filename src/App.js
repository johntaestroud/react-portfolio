import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Header, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="JS" scroll>
                <Navigation>
                    {/* <Link to="resume/">Resume</Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </Navigation>
            </Header>
            <Drawer title="JS">
                <Navigation>
                    {/* <Link to="resume/">Resume</Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
     </div>
    );
  }
}

export default App;
