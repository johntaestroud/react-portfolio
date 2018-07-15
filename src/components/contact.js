import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
              <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Johntae Stroud</h2>
                    <img
                      src="./js"
                    //   alt="avatar"
                    //   style={{height: '150px', width: '150px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>What languages have I touched? <span><br/></span>JavaScript, Java, C#, Swift, Ruby, Python, PHP, SQL, and VBScript.
                       Specializing in JavaScript with a passion to learning modern technologies. Willing to redirect my studies depending on my next path.
                       Flexible when it comes to learning programming languages, give me directions and I'll take the wheel.
                       I've currently been focusing on the following technologies: JavaScript, React, and Redux.</p>
                </Cell>
                <Cell col={6}>
                  <h2>Contact Me</h2>
                  <hr/>

                  <div className="contact-list">
                    <List>
                      <ListItem>
                        <ListItemContent style={{ fontFamily: 'Permanent Marker'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (407) 408-7202
                        </ListItemContent>             
                      </ListItem>

                      <ListItem>
                        <ListItemContent style={{ fontFamily: 'Permanent Marker'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        johntae.stroud@gmail.com
                        </ListItemContent>             
                      </ListItem>
                        
                    </List>
                 </div>
                </Cell>
              </Grid>
            </div>
        )
    }
}

export default Contact;