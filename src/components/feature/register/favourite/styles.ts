import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    body: {
      display: 'grid',
      borderRadius: theme.shape.borderRadius,
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      width: '100%',
      backgroundColor: theme.custom.bg[2],
      padding: theme.spacing(4),
      border: `1px solid ${theme.palette.divider}`,
    },
  };
});

export default useStyles;
