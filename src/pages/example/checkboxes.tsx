import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Switch,
  Theme,
} from '@material-ui/core';
import { getExampleLayout } from '@components/layout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px dashed ${
      theme.palette.type === 'dark'
        ? theme.palette.secondary.main
        : theme.palette.primary.main
    }`,
  },
}));

const CheckboxesPage = () => {
  const classes = useStyles();

  const [size, setSize] = useState<'small' | 'medium'>('medium');

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={size === 'small'}
            onChange={() => setSize(size === 'small' ? 'medium' : 'small')}
          />
        }
        label="Small size"
      />

      <div>
        <Checkbox size={size} />
        <FormControlLabel
          control={<Checkbox size={size} />}
          label="with Label"
        />
      </div>
    </div>
  );
};
CheckboxesPage.getLayout = getExampleLayout;

export default CheckboxesPage;
