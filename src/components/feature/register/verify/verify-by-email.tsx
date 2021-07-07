import React, { useEffect } from 'react';

import { Typography, Fade, Button, CircularProgress } from '@material-ui/core';
import { AppInput } from '@components/core';

import { useStyles } from './styles';
import { useForm } from 'react-hook-form';

import Icons from '@assets/icons';
import useTimer from '../use-timer';
export interface VerifyByEmailProps {
  email: string;
  sent?: boolean;
  errorMessage?: string;
  loading?: boolean;
  onResend: () => any;
  onSend: () => any;
  onVerify: (data: { otp: string }) => any;
}

const VerifyByEmail: React.FC<VerifyByEmailProps> = ({
  email,
  onVerify,
  onResend,
  onSend,
  errorMessage,
  loading,
  sent,
}) => {
  const classes = useStyles();

  const { control, handleSubmit, setError } = useForm({
    defaultValues: { otp: '' },
  });

  const [otpMessage, startTimer, canResend, resetTimer] = useTimer();

  useEffect(() => {
    if (errorMessage) {
      setError('otp', { type: 'validate', message: errorMessage });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  return (
    <div className={classes.content}>
      <Typography gutterBottom>Verify by Email Address</Typography>

      {sent ? (
        <Fade in={sent}>
          <form onSubmit={handleSubmit(onVerify)}>
            <Typography gutterBottom color="primary" variant="body2">
              <Icons.Checked fill="#fff" style={{ marginRight: 10 }} />
              {`Email sent to ${email}`}
            </Typography>

            <AppInput
              controller={{
                control,
                name: 'otp',
                rules: {
                  required: 'OTP is not correct',
                  pattern: {
                    value: /\b\d{6}\b/,
                    message: 'OTP is not correct',
                  },
                },
              }}
              fullWidth
              label="Please enter the 6-digit OTP we have sent to your email"
              placeholder="Enter OTP here"
            />

            <div className={classes.submit}>
              <Button
                type="submit"
                color="primary"
                startIcon={
                  loading ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : null
                }>
                {loading ? 'Verifying...' : 'Verify'}
              </Button>

              {sent && !canResend ? (
                <Fade in={!canResend}>
                  <Typography className={classes.timer} variant="body2">
                    {otpMessage}
                  </Typography>
                </Fade>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    resetTimer();
                    onResend();
                  }}>
                  Resend OTP
                </Button>
              )}
            </div>
          </form>
        </Fade>
      ) : (
        <Button
          onClick={() => {
            startTimer();
            onSend();
          }}>
          {`Send email to ${email}`}
        </Button>
      )}
    </div>
  );
};

export default VerifyByEmail;
