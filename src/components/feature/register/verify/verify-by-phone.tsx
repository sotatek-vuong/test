import React, { useEffect } from 'react';

import {
  Typography,
  Button,
  Fade,
  MenuItem,
  CircularProgress,
} from '@material-ui/core';
import { AppInput, AppSelect } from '@components/core';

import { useStyles } from './styles';
import { useForm } from 'react-hook-form';

import useTimer from '../use-timer';
interface DataForm {
  code: string;
  phoneNumber: string;
  otp: string;
}

export interface VerifyByPhoneProps {
  sent?: boolean;
  errorMessage?: string;
  loading?: boolean;
  onResend: () => any;
  onSend: (phoneNumber: string) => any;
  onVerify: (data: DataForm) => any;
}

const VerifyByPhone: React.FC<VerifyByPhoneProps> = ({
  onVerify,
  errorMessage,
  loading,
  onSend,
  sent,
}) => {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
    setError,
  } = useForm<DataForm>({
    defaultValues: { code: '+41', phoneNumber: '', otp: '' },
  });

  useEffect(() => {
    if (errorMessage) {
      setError('otp', { type: 'validate', message: errorMessage });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  const [otpMessage, startTimer, canResend, resend] = useTimer();

  const sendHandler = (data: DataForm) => {
    const val = data.phoneNumber;
    startTimer();
    onSend(val);
  };

  return (
    <div className={classes.content}>
      <Typography gutterBottom>Verify by Phone Number</Typography>

      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(sent ? onVerify : sendHandler)}>
        <div className={classes.phoneInputs}>
          <AppSelect
            controller={{
              control,
              name: 'code',
            }}
            autoWidth
            placeholder="Enter OTP here">
            {['+41', '+42', '+43'].map((val, index) => (
              <MenuItem key={index} value={val}>
                {val}
              </MenuItem>
            ))}
          </AppSelect>

          <AppInput
            readOnly={sent}
            controller={{
              name: 'phoneNumber',
              control,
              rules: {
                required: 'Required',
                // @ts-ignore
                validate: (v) => (v.length >= 8 ? null : 'Except 9 chars'),
              },
            }}
            style={{ flexGrow: 4 }}
            placeholder="Enter your phone number"
          />
        </div>

        <Fade in={sent} unmountOnExit>
          <AppInput
            controller={{
              name: 'otp',
              control,
              rules: {
                required: 'OTP is not correct',
                pattern: {
                  value: /\b\d{6}\b/,
                  message: 'OTP is not correct',
                },
              },
            }}
            fullWidth
            placeholder="Enter OTP here"
            label="Please enter the 6-digit OTP we have sent to your phone"
          />
        </Fade>

        <div className={classes.submit}>
          <Button
            type="submit"
            disabled={!isDirty}
            startIcon={
              loading ? <CircularProgress size={16} color="inherit" /> : null
            }>
            {sent ? (loading ? 'Verifying...' : 'Verify') : 'Send SMS'}
          </Button>
          {canResend ? (
            <Button variant="outlined" onClick={resend}>
              Resend OTP
            </Button>
          ) : (
            <Fade in={sent && !canResend}>
              <Typography className={classes.timer} variant="body2">
                {otpMessage}
              </Typography>
            </Fade>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyByPhone;
