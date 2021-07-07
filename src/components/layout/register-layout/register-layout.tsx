import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';

import { useStyles } from './styles';

import { sleep } from '@/utils/helpers';
import Icons from '@assets/icons';

const RegisterLayout: React.FC = ({ children }) => {
  const email = 'graham@gmail.com';

  const classes = useStyles();

  const [emailLoading, setEmailLoading] = useState(false);
  const [phoneLoading, setPhoneLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [sentEmail, setSentEmail] = useState(false);
  const [sentPhone, setSentPhone] = useState(false);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Icons.Logo className={classes.logo} />
      {children}

      {/* <Typography
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
            setEmailLoading(true);
            await sleep();
            if (otp === '123123') {
              setEmailError('');
              setEmailError('Mock up');
            }
            setEmailLoading(false);
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
            setPhoneLoading(true);
            await sleep();
            if (data.otp === '123123') {
              setPhoneError('');
              setPhoneError('Mock up error');
            }
            setPhoneLoading(false);
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
      </div> */}
    </Container>
  );
};

export const getRegisterLayout = (page: any) => {
  return <RegisterLayout>{page}</RegisterLayout>;
};

export default RegisterLayout;
