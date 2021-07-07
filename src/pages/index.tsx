import React, { useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';

import { RegisterDialog } from '@components/feature';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        TODO: dashboard & betting flow page
      </Typography>

      <RegisterDialog
        open={open}
        onRegister={(data) => {
          console.log({ data });
          router.replace('/register/verify');
        }}
      />
      <Button
        onClick={() => {
          setOpen(true);
        }}
        color="secondary">
        Register
      </Button>
    </Container>
  );
}
