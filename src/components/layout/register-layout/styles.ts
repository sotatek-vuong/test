import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',

      marginTop: theme.spacing(6),
    },
    logo: {
      marginBottom: theme.spacing(3),
      alignSelf: 'center',
    },
  };
});
