import _ from 'lodash';
import clsx from 'clsx';
import {
  Tabs,
  Tab,
  Box,
  Container,
  TextField,
  InputAdornment,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { useRouter } from 'next/router';

import { Link as LinkBehavior } from '@components/core';
import { useStyles } from './styles';

import Icons from '@assets/icons';

const _tabs = ['home', 'sports', 'e-sports', 'crypto'];

const NavBar: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box borderBottom={1} color="#383C43">
      <Container disableGutters>
        <AppBar position="static" color="transparent" elevation={0} square>
          <Toolbar className={classes.containerNavbar}>
            <div className={classes.inline}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" className={classes.logo} alt="logo" />
              <Tabs
                value={_.chain(router.pathname).split('/').last().value()}
                textColor="primary">
                {_tabs.map((label, index) => (
                  <Tab
                    value={label}
                    component={LinkBehavior}
                    label={label}
                    key={index}
                    href={`/dashboard/${label}`}
                  />
                ))}
              </Tabs>
            </div>
            <div className={classes.inline}>
              <TextField
                size="small"
                variant="outlined"
                className={classes.inputSearch}
                placeholder="Search leagues, sports..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      className={classes.inputSearch}>
                      <Icons.Search />
                    </InputAdornment>
                  ),
                }}
              />
              <div className={clsx(classes.line, classes.pRight)}>
                <div className={classes.avatar}>
                  <Typography
                    className={classes.fontWeightBold}
                    variant="body2">
                    G
                  </Typography>
                </div>
              </div>
              <div className={clsx(classes.pLeft, classes.inline)}>
                <Icons.Receipt />
                <div className={classes.receiptNumber}>
                  <Typography
                    className={clsx(
                      classes.fontWeightBold,
                      classes.receiptNumberText,
                    )}
                    variant="body2">
                    0
                  </Typography>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default NavBar;
