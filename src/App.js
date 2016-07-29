import React, { Component } from 'react';

import Paper from 'material-ui/Paper'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './App.css';

import ConversationContactAvatar from './ConversationContactAvatar'

const paperStyle = {
    height: '400px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#4B5854'
}

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
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
