import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    container: {
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.custom.bg[2],
    },
    content: {
      padding: theme.spacing(4),
    },

    submit: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
    },
    timer: {
      color: theme.custom.content[2],
      fontWeight: 'bold',
    },

    phoneInputs: {
      display: 'flex',
      gap: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    header: {
      fontWeight: 'bold',
    },
    subheader: {
      marginBottom: 24,
    },
  };
});
