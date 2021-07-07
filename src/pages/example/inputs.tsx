import React, { useState } from 'react';
import { FormControlLabel, makeStyles, Switch, Theme } from '@material-ui/core';
import { AppInput } from '@components/core';
import { useForm } from 'react-hook-form';
import { getExampleLayout } from '@components/layout';

const useStyles = makeStyles((theme: Theme) => ({
  col: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    gap: theme.spacing(1),
  },
}));

const InputsPage = () => {
  const classes = useStyles();

  const [label, setLabel] = useState<boolean>(true);
  const [required, setRequired] = useState<boolean>(true);

  const { control } = useForm({ defaultValues: { test: '' } });

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={label} onChange={() => setLabel(!label)} />}
        label="with label"
      />
      <FormControlLabel
        control={
          <Switch checked={required} onChange={() => setRequired(!required)} />
        }
        label="with required"
      />
      <AppInput
        controller={{ control, name: 'test' }}
        required={required}
        label={label ? 'Awesome label' : ''}
      />
      <AppInput
        controller={{ control, name: 'test' }}
        required={required}
        label={label ? 'Awesome label' : ''}
        placeholder="normal"
      />
      <AppInput
        controller={{ control, name: 'test' }}
        required={required}
        label={label ? 'Awesome label' : ''}
        placeholder="multiline"
        multiline
        rows={3}
      />
      <AppInput
        controller={{ control, name: 'test' }}
        required={required}
        label={label ? 'Awesome label' : ''}
        placeholder="readOnly"
        readOnly
      />
      <AppInput
        controller={{ control, name: 'test' }}
        required={required}
        label={label ? 'Awesome label' : ''}
        placeholder="disabled"
        disabled
      />
    </div>
  );
};

InputsPage.getLayout = getExampleLayout;

export default InputsPage;
