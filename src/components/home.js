import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                  <Cell col={12}>
                    <img src="" alt="" className="profile-img"/>
                    <div className="title-text">
                        <h1>Software Developer</h1>
                        <hr/>

                        <p>HTML/CSS | JavaScript | React | PHP </p>
                        
                        <div className="social-links">
                             {/* Github */}
                             <a href="https://github.com/johntaestroud" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                            {/* Contact */}
                            <a href="mailto:johntae.stroud@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope-o" aria-hidden="true" />
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/talentfamer/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                  </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;