import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class Header extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="title" color="inherit">
            Chat
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
  }
}
