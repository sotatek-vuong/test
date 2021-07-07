import React from 'react';

import { DividerProps, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import clsx from 'clsx';

export interface LabelDividerProps extends DividerProps {
  label: string;
  className?: string;
  py?: 'small' | 'large' | false;
}

const LabelDivider: React.FC<LabelDividerProps> = ({
  label,
  className,
  py = false,
}) => {
  const classes = useStyles();

  let gutters = null;
  switch (py) {
    case 'large':
      gutters = classes.largeGutter;
      break;
    case 'small':
      gutters = classes.smallGutter;
      break;
  }

  return (
    <div className={clsx(classes.wrapper, gutters, className)}>
      <Typography variant="body2" className={classes.label}>
        {label}
      </Typography>
    </div>
  );
};
export default LabelDivider;
