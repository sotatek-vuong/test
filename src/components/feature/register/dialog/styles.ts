import { darken, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    title: {
      fontWeight: 'bold',
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(3),
    },

    birthday: {
      marginTop: theme.spacing(2),
      display: 'flex',
      gap: theme.spacing(1),
      '& > *:not(:first-child)': {
        flexGrow: 1,
        maxWidth: 100,
      },
      '& :first-child': {
        flexGrow: 0.5,
        maxWidth: 80,
      },
    },

    checkbox: {
      alignSelf: 'flex-start',
    },

    checkboxLabel: {
      maxWidth: '40ch',
    },

    social: {
      display: 'flex',
      gap: theme.spacing(1),
      '& > *': {
        flexGrow: 1,
      },
    },

    facebook: {
      backgroundColor: '#3B5998',
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: darken('#3B5998', 0.2),
      },
    },
    google: {
      backgroundColor: theme.palette.common.white,
      '&:hover': {
        backgroundColor: darken(theme.palette.common.white, 0.2),
      },
    },
  };
});
