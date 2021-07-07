import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
      color: theme.palette.common.white,
    },
  },

  input: {
    backgroundColor: theme.custom.bg[2],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 2),
    border: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(['border-color']),

    '&::placeholder': {
      color: theme.custom.content[3],
      fontWeight: 500,
    },
  },
  focusInput: {
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
  multiline: {
    padding: 0,
  },
  disabled: {
    color: `rgba(255, 255, 255, 0.3)`,
  },
  asterisk: {
    color: theme.custom.status.red,
  },
  error: {
    borderColor: theme.custom.status.red,
  },
}));
