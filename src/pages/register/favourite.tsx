import React from 'react';
import { Typography, Button, makeStyles, Theme } from '@material-ui/core';

import { getRegisterLayout } from '@components/layout';
import { RegisterFavorite } from '@components/feature';

import { useStyles as useVerifyStyles } from './verify';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  submit: {
    width: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const RegisterFavPage = () => {
  const verifyClasses = useVerifyStyles();
  const classes = useStyles();

  const router = useRouter();

  const onNext = () => {
    router.replace('/u/dashboard');
  };

  return (
    <React.Fragment>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        className={verifyClasses.header}>
        Follow your favourite games
      </Typography>

      <Typography align="center" className={verifyClasses.subheader}>
        For a personalized experience
      </Typography>

      <RegisterFavorite />

      <div className={classes.submit}>
        <Button onClick={onNext} size="large" fullWidth>
          Next
        </Button>
        <Button
          onClick={onNext}
          size="large"
          fullWidth
          color="primary"
          variant="text">
          Skip
        </Button>
      </div>
    </React.Fragment>
  );
};

RegisterFavPage.getLayout = getRegisterLayout;

export default RegisterFavPage;
