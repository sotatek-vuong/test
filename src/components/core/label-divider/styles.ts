import { makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from 'react';

export const useStyles = makeStyles((theme: Theme) => {
  const dividerCss: CSSProperties = {
    position: 'relative',
    top: '50%',
    width: '50%',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: '0',
    transform: 'translateY(50%)',
    content: '""',
  };

  return {
    wrapper: {
      display: 'flex',
      clear: 'both',
      width: '100%',
      minWidth: '100%',
      '&::before': dividerCss,
      '&::after': dividerCss,
    },
    label: {
      color: theme.custom.content[2],
      padding: theme.spacing(0, 2),
      fontWeight: 'bold',
    },

    smallGutter: {
      padding: theme.spacing(3, 0),
    },
    largeGutter: {
      padding: theme.spacing(4, 0),
    },
  };
});
