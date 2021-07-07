import React, { useState } from 'react';
import {
  FormControlLabel,
  Link as MuiLink,
  makeStyles,
  Switch,
  Typography,
} from '@material-ui/core';
import { Link } from '@components/core';
import clsx from 'clsx';
import { getExampleLayout } from '@components/layout';

const useStyles = makeStyles({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});

const TypographyPage = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const classes = useStyles();

  return (
    // this component equals <> </>, it's recommend to use
    // this because it can cause unexpected bugs like
    // indexed key
    <React.Fragment>
      <FormControlLabel
        control={
          <Switch checked={bold} onChange={() => setBold((prev) => !prev)} />
        }
        label="bold"
      />

      <FormControlLabel
        control={
          <Switch
            checked={italic}
            onChange={() => setItalic((prev) => !prev)}
          />
        }
        label="Italic"
      />
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h1"
        gutterBottom>
        h1. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h2"
        gutterBottom>
        h2. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h3"
        gutterBottom>
        h3. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h4"
        gutterBottom>
        h4. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h5"
        gutterBottom>
        h5. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="h6"
        gutterBottom>
        h6. Heading
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="subtitle1"
        gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="subtitle2"
        gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="body1"
        gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="body2"
        gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="button"
        display="block"
        gutterBottom>
        button text
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="caption"
        display="block"
        gutterBottom>
        caption text
      </Typography>
      <Typography
        className={clsx(bold && classes.bold, italic && classes.italic)}
        variant="overline"
        display="block"
        gutterBottom>
        overline text
      </Typography>

      {/* try inline 👌👌👌 */}
      <MuiLink display="block">Mui MuiLink</MuiLink>

      <MuiLink href="/auth/example/button" component={Link}>
        this text has link behavior
      </MuiLink>
    </React.Fragment>
  );
};

TypographyPage.getLayout = getExampleLayout;
export default TypographyPage;
