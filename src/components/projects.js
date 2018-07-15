import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, Button, IconButton, CardText, CardTitle } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
              <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://frontside.io/blog/2016/12/15/building-infinite-scroll-in-react-native/react-native-header.jpg) center /cover'}} >MainEvents</CardTitle>
                    <CardText>React, Redux, & Semantic-UI - Coming soon</CardText> 

                    <CardActions border>
                      <a href="https://github.com/johntaestroud/mainevents" rel="noopener noreferrer" target="_blank">
                        <Button colored>GitHub</Button>
                      </a>
                        {/* <Button colored>Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                
             </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1280/1*gfsTpGpWE5dld34ygNZc6w.jpeg) center /cover'}} >Crypto</CardTitle>
                    <CardText>Top 100 Cryptocurrencies | Bitcoin Chart</CardText> 

                    <CardActions border>
                      <a href="https://github.com/johntaestroud/crypto" rel="noopener noreferrer" target="_blank">
                        <Button colored>GitHub</Button>
                      </a>
                      <a href="https://johntaestroud.github.io/crypto/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Demo</Button> 
                      </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                
             </div>
            ) 
        } else if(this.state.activeTab === 2) {
            return (
                <div className='projects-grid'>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*vvIq_zDcvP7DdivUY8k-Dw.png) center /cover'}} >Queryme</CardTitle>
                    <CardText>Search engine - Coming soon</CardText> 

                    <CardActions border>
                      <a href="https://github.com/johntaestroud/queryme" rel="noopener noreferrer" target="_blank">
                        <Button colored>GitHub</Button>
                      </a>
                      {/* <a href="https://johntaestroud.github.io/crypto/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Demo</Button> 
                      </a> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card> 
             </div>
            )
        }
    }

  

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>PHP</Tab>
                </Tabs>
               
                  <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                  </Grid>          
            </div>
        )
    }
}

export default Projects;