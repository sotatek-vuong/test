import { Container } from '@material-ui/core';
import React from 'react';

import _ from 'lodash';
import { getExampleLayout } from '@components/layout';

const ExamplePage = () => {
  return <Container>Index page</Container>;
};

ExamplePage.getLayout = getExampleLayout;

export default ExamplePage;
