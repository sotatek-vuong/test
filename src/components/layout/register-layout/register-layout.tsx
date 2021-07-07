import React from 'react';
import { Container } from '@material-ui/core';

import { useStyles } from './styles';

import Icons from '@assets/icons';

const RegisterLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Icons.Logo className={classes.logo} />
      {children}
    </Container>
  );
};

export const getRegisterLayout = (page: any) => {
  return <RegisterLayout>{page}</RegisterLayout>;
};

export default RegisterLayout;
