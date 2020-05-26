import React from 'react';

import { Box, Divider } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import './Footer.scss';

export const Footer: React.FC = () => (
  <div className="footer-container">
    <Divider />
    <Box color="primary.contrastText" padding={2} className="box">
      Made with&nbsp;
      <Favorite />
      &nbsp;by&nbsp;
      <a
        href="http://github.com/santarelle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Marco Jardim</strong>
      </a>
    </Box>
  </div>
);
