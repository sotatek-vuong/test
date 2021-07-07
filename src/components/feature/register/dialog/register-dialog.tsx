import { useStyles } from './styles';

import {
  BaseDialog,
  BaseDialogProps,
  LabelDivider,
  AppInput,
} from '@components/core';
import {
  Button,
  Checkbox,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormLabel,
  Typography,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

import Icons from '@assets/icons';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  birthday: string[];
  promoCode?: string;
}

interface FormData extends RegisterData {
  acceptTerms: boolean;
  confirm: string;
}

interface RegisterDialogProps extends BaseDialogProps {
  onRegister: (data: RegisterData) => any;
}

const RegisterDialog: React.FC<RegisterDialogProps> = ({
  onRegister,
  ...rest
}) => {
  const classes = useStyles();

  const { control, handleSubmit, setError } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
      birthday: ['', '', ''],
      promoCode: '',
      acceptTerms: false,
      confirm: '',
    },
  });

  return (
    <BaseDialog showCloseIcon {...rest}>
      <DialogTitle disableTypography>
        <Typography variant="h6" className={classes.title}>
          Register to Play
        </Typography>
      </DialogTitle>
      <DialogContent>
        <div className={classes.social}>
          <Button
            startIcon={<Icons.Facebook />}
            size="large"
            className={classes.facebook}>
            Facebook
          </Button>
          <Button
            startIcon={<Icons.Google />}
            size="large"
            className={classes.google}>
            Google
          </Button>
        </div>

        <LabelDivider label="OR" py="large" />

        <form
          className={classes.form}
          onSubmit={handleSubmit(({ confirm, acceptTerms, ...data }) => {
            if (confirm !== data.password) {
              setError('confirm', { type: 'validate', message: 'Not match' });
              return;
            }

            onRegister(data);
          })}>
          <AppInput
            controller={{ control, name: 'username' }}
            fullWidth
            label="Username"
            required
          />
          <AppInput
            controller={{ control, name: 'email' }}
            fullWidth
            label="Email Address"
            required
          />
          <AppInput
            controller={{ control, name: 'password' }}
            type="password"
            fullWidth
            label="Enter Password"
            required
          />
          <AppInput
            controller={{ control, name: 'confirm' }}
            type="password"
            fullWidth
            label="Confirm Password"
            required
          />

          <div>
            <FormLabel required>Date of Birth</FormLabel>
            <div className={classes.birthday}>
              <AppInput
                placeholder="Day"
                controller={{ control, name: 'birthday.2' }}
              />
              <AppInput
                placeholder="Month"
                controller={{ control, name: 'birthday.1' }}
              />
              <AppInput
                placeholder="Year"
                controller={{ control, name: 'birthday.0' }}
              />
            </div>
          </div>

          <AppInput
            controller={{ control, name: 'promoCode' }}
            fullWidth
            placeholder="Enter Promo Code (Optional)"
            label="Promo Code"
          />

          <Controller
            control={control}
            name="acceptTerms"
            // rules={{ required: 'required' }}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    value={value}
                    onChange={(e, checked) => onChange(checked)}
                    className={classes.checkbox}
                  />
                }
                classes={{ label: classes.checkboxLabel }}
                label="I am above 18 years of age, and accept the Terms & Conditions."
              />
            )}
          />

          <Button size="large" type="submit">
            Register Now
          </Button>
        </form>
      </DialogContent>
    </BaseDialog>
  );
};

export default RegisterDialog;
