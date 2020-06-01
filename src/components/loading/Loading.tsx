import './Loading.scss';

import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => (
  <div className="loading-container">
    <CircularProgress size={100} color="secondary" />
  </div>
);
