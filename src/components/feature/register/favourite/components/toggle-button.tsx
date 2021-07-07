import { FC, useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Icons from '@assets/icons';

interface Props {
  name?: string;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  txt: {
    textOverflow: 'ellipsis',
  },
});

const ToggleButton: FC<Props> = (props): JSX.Element => {
  const [selected, setSelected] = useState(false);
  const styles = useStyles();

  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      color={selected ? 'primary' : 'default'}
      className={styles.root}
      size="large"
      onClick={() => setSelected(!selected)}>
      <span className={styles.txt}>{props.name}</span>
      {selected ? <Icons.Check /> : <Icons.Plus />}
    </Button>
  );
};

export default ToggleButton;
