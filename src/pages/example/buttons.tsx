import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  makeStyles,
  Switch,
  Theme,
  ButtonBase,
  Typography,
} from '@material-ui/core';
import { Link } from '@components/core';
import { RegisterDialog } from '@components/feature';
/**
 * docs: https://create-react-app.dev/docs/adding-images-fonts-and-files/
 */
import { useRouter } from 'next/router';
import { getExampleLayout } from '@components/layout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  custom: {
    // 8 * 2 (px)
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(https://picsum.photos/200/300)`,
    height: 200,
    width: 300,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '&:hover': {
      color: 'red',
    },
  },
}));

const ButtonsPage = () => {
  const classes = useStyles();

  const router = useRouter();

  const [size, setSize] = useState<'small' | 'large'>('large');

  const [openRegister, setOpenRegister] = useState(false);

  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch
            checked={size === 'small'}
            onChange={() => setSize(size === 'small' ? 'large' : 'small')}
          />
        }
        label="Small size"
      />

      <div className={classes.root}>
        <Typography variant="h4">text variant</Typography>

        <Button size={size} onClick={() => setOpenRegister((prev) => !prev)}>
          Default
        </Button>
        <RegisterDialog
          open={openRegister}
          onClose={() => setOpenRegister(false)}
          onRegister={(data) => {
            console.log(data);
            router.push('/auth/register/verify');
          }}
        />
        <Button size={size} color="primary">
          Primary
        </Button>
        <Button size={size} color="secondary">
          Secondary
        </Button>
        <Button size={size} disabled>
          Disabled
        </Button>
        <Button
          size={size}
          color="primary"
          component={Link}
          href="/auth/example/typography">
          Link
        </Button>
      </div>

      <div className={classes.root}>
        <Typography variant="h4">Contained</Typography>
        <Button size={size} variant="contained" color="primary">
          Primary
        </Button>
        <Button size={size} variant="contained" color="secondary">
          Secondary
        </Button>
        <Button size={size} variant="contained" disabled>
          Disabled
        </Button>
        <Button
          size={size}
          variant="contained"
          naked
          color="primary"
          component={Link}
          href="/auth/example/typography">
          Link
        </Button>
      </div>

      <div className={classes.root}>
        <Typography variant="h4">Outlined</Typography>
        <Button size={size} variant="outlined" color="primary">
          Primary
        </Button>
        <Button size={size} variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button size={size} variant="outlined" disabled>
          Disabled
        </Button>
        <Button
          size={size}
          variant="outlined"
          naked
          color="primary"
          component={Link}
          href="/auth/example/typography">
          Link
        </Button>
      </div>

      <div className={classes.root}>
        <div className={classes.root}>
          <Typography variant="h4">custom example</Typography>

          <ButtonBase
            className={classes.custom}
            onClick={() => router.push('/auth/example/typography')}>
            <Typography variant="h2">hover and click me</Typography>
          </ButtonBase>
        </div>
      </div>
    </React.Fragment>
  );
};

ButtonsPage.getLayout = getExampleLayout;

export default ButtonsPage;
