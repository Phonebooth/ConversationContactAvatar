import React, { Component } from 'react';

import Paper from 'material-ui/Paper'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import logo from './logo.svg';
import './App.css';

import ConversationContactAvatar from './ConversationContactAvatar'

const paperStyle = {
    height: '400px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Paper style={paperStyle} zDepth={2}>
                    <ConversationContactAvatar size={32} isCalling={true} />
                </Paper>
                <Paper style={paperStyle} zDepth={2}>
                    <ConversationContactAvatar size={32} isCalling={false} />
                </Paper>
                <Paper style={paperStyle} zDepth={2}>
                    <ConversationContactAvatar size={256} isCalling={true} />
                </Paper>
                <Paper style={paperStyle} zDepth={2}>
                    <ConversationContactAvatar size={256} isCalling={false} />
                </Paper>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
