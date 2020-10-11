import React, { Component } from 'react';

// MUI
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar } from '@material-ui/core';
import Link from 'react-router-dom/Link';

export class Navbar extends Component {
  render() {
    return (
      <AppBar color="#F9FAF9" style={styles.appBar}>
        <Toolbar style={styles.Toolbar}>
          <img
            src={require('../images/logo_inline.png')}
            alt="Logo Web Untangled"
            style={styles.logo}
          />
          <div>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              style={styles.NavButton}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/home"
              style={styles.NavButton}
            >
              Sign In
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = {
  logo: {
    width: '20%',
    margin: '10px',
  },
  NavButton: {
    margin: '15px',
    font: 'Roboto',
    fontSize: 'xx-large',
  },
  appBar: {
    backgroundColor: '#f9faf9',
  },
  navText: {
    paddingLeft: '1000px',
  },
  Toolbar: {
    textAlign: 'right',
  },
};

export default Navbar;
