import React, { useState } from 'react';
import { Typography, makeStyles, Theme } from '@material-ui/core';

import { sleep } from '@utils/helpers';
import { LabelDivider } from '@components/core';
import { getRegisterLayout } from '@components/layout';
import { VerifyByEmail, VerifyByPhone } from '@components/feature';
import { useRouter } from 'next/router';

export const useStyles = makeStyles((theme: Theme) => ({
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
}));

const RegisterVerifyPage = () => {
  const email = 'graham@gmail.com';

  const classes = useStyles();
  const router = useRouter();

  const [emailLoading, setEmailLoading] = useState(false);
  const [phoneLoading, setPhoneLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [sentEmail, setSentEmail] = useState(false);
  const [sentPhone, setSentPhone] = useState(false);

  return (
    <React.Fragment>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        className={classes.header}>
        Welcome to BetU!
      </Typography>

      <Typography align="center" className={classes.subheader}>
        Please verify your account to get started.
      </Typography>
      <div className={classes.container}>
        <VerifyByEmail
          onVerify={async ({ otp }) => {
            try {
              setEmailLoading(true);
              await sleep();
              if (otp === '123123') {
                throw new Error();
              }
              router.replace('/register/favourite');
            } catch (err) {
              setEmailError('');
              setEmailError('Mock up');
            } finally {
              setEmailLoading(false);
            }
          }}
          onSend={() => {
            setSentEmail(true);
          }}
          onResend={() => {
            console.log('resent');
          }}
          email={email}
          sent={sentEmail}
          loading={emailLoading}
          errorMessage={emailError}
        />

        <LabelDivider label="OR" />

        <VerifyByPhone
          onVerify={async (data) => {
            try {
              setPhoneLoading(true);
              await sleep();
              if (data.otp === '123123') {
                throw new Error();
              }
              router.replace('/register/favourite');
            } catch (err) {
              setPhoneError('');
              setPhoneError('Mock up');
            } finally {
              setPhoneLoading(false);
            }
          }}
          sent={sentPhone}
          onSend={() => {
            setSentPhone(true);
          }}
          onResend={() => {
            console.log('resent');
          }}
          loading={phoneLoading}
          errorMessage={phoneError}
        />
      </div>
    </React.Fragment>
  );
};

RegisterVerifyPage.getLayout = getRegisterLayout;

export default RegisterVerifyPage;
