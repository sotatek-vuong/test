import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  icon: {
    top: 'calc(50% - 3px)',
    right: 16,
  },
  select: {
    '&.MuiSelect-select': {
      paddingRight: 40,
    },
  },
});
