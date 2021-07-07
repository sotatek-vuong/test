import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    containerNavbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logo: {
      height: 32,
      width: 80,
      marginRight: theme.spacing(3),
    },
    avatar: {
      '&:hover': {
        cursor: 'pointer',
      },
      padding: theme.spacing(0.75, 1.282),
      background: '#282828',
      borderRadius: 24,
      border: '1px solid #383C43',
      fontSize: 18,
      color: '#fff',
      marginLeft: theme.spacing(3),
    },
    inputSearch: {
      '& fieldset': {
        borderRadius: 24,
      },
    },
    line: {
      borderRight: '1px solid #383C43',
    },
    receiptNumber: {
      '&:hover': {
        cursor: 'pointer',
      },
      marginLeft: theme.spacing(1),
      padding: theme.spacing(0, 0.5, 0.15, 0.5),
      background: '#282828',
      borderRadius: 24,
      border: '1px solid #383C43',
      color: '#fff',
    },
    receiptNumberText: {
      fontSize: 12,
    },
    inline: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    fontWeightBold: {
      fontWeight: 'bold',
    },
    pLeft: {
      paddingLeft: 24,
    },
    pRight: {
      paddingRight: 24,
    },
  };
});
