import React, { Component } from 'react';
import styled from 'react-emotion';
// import { Redirect } from 'react-router-dom';


const Box = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 475px;
  height: 100px;
  align-items: center;
`

const DividerHeader = styled('div')`
  background-color: #eeeeee;
  color: #3c3c3c;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: bold;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: 'rhino horn trade'
    }
  }
  
  render() {
    return (
    <Box>
      <p>Hey there! It looks like this page mentions {this.state.topic}!</p>
      <p>Unfortunately, this topic has been reported as a serious offense.</p>
      <hr style={{ width: '100%'}} />
      <p>To learn more, <a href="/submit" target="_blank">please click here</a></p>
      <DividerHeader>
        <p>Additional Actions</p>
      </DividerHeader>
      <p><a rel="noopener noreferrer" target="_blank" href="http://localhost:3001/info">Add Information</a></p>
      <p><a href="/report" target="_blank">Report this page</a></p>
      <p><a href="/feedback" target="_blank">Submit Feedback</a></p>
    </Box>
    );
  }
}

export default App;
