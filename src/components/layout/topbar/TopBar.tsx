import './TopBar.scss';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListIcon from '@material-ui/icons/List';

import Logo from 'src/assets/logo.svg';
import * as MenuCategoryActions from 'src/store/menu-category/actions';

export const TopBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="topbar-container">
      <AppBar position="static">
        <Toolbar className="toolbar-container">
          <Link to="/" className="logo-name">
            <img src={Logo} alt="Logo" />
            <Typography variant="h6">Recipe App</Typography>
          </Link>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar
              className="category-btn avatar"
              onClick={() => dispatch(MenuCategoryActions.toggle())}
            >
              <ListIcon />
            </Avatar>
            <Link to="/">
              <Avatar className="avatar">
                <FavoriteIcon />
              </Avatar>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
