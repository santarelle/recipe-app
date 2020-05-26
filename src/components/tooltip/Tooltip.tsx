import React from 'react';

import {
  makeStyles,
  Theme,
  Tooltip as TooltipMaterialUI,
} from '@material-ui/core';

type TooltipProps = {
  children: React.ReactElement;
  title: string;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
};

export const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const { children, title, placement } = props;

  const classes = makeStyles((theme: Theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <TooltipMaterialUI
      arrow
      classes={classes()}
      title={title}
      placement={placement}
    >
      {children}
    </TooltipMaterialUI>
  );
};
