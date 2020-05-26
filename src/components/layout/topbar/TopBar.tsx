import './TopBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import Logo from 'src/assets/logo.svg';

export const TopBar: React.FC = () => (
  <div className="topbar-container">
    <AppBar position="static">
      <Toolbar className="toolbar-container">
        <Link to="/" className="logo-name">
          <img src={Logo} alt="Logo" />
          <Typography variant="h6">Recipe App</Typography>
        </Link>

        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            startIcon={<BookmarkIcon />}
          >
            MY FAVORITES
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);
