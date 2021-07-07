import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    containerCategory: {
      marginTop: theme.spacing(4),
    },
    table: {
      background: '#202020',
      borderRadius: 4,
      marginTop: theme.spacing(2),
      boxShadow: ''
    },
    firstHead: {
      width: '25%',
    },
    inputHead: {
      width: '15%',
    },
    input: {
      background: '#141414',
      padding: theme.spacing(1.5, 5.5),
      borderRadius: 3,
      '&:hover': {
        cursor: 'pointer',
        opacity: '0.7',
      },
    },
    fontWeightBold: {
      fontWeight: 'bold',
    },
    textGrey: {
      color: '#999',
    },
  };
});
