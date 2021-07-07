import React, { FC } from 'react';
import { useStyles } from './styles';
import ToggleButton from './components/toggle-button';
interface Props {
  name?: string;
}

const FollowFavoriteGame: FC<Props> = () => {
  const styles = useStyles();

  return (
    <div className={styles.body}>
      {data.map((item, index) => (
        <ToggleButton key={index} name={item.name} />
      ))}
    </div>
  );
};

const data = [
  { name: 'Soccer' },
  { name: 'Baseball' },
  { name: 'Football' },
  { name: 'Basketball' },
  { name: 'Cryptocurrency' },
  { name: 'Hockey' },
  { name: 'Football' },
  { name: 'Basketball' },
  { name: 'Soccer' },
  { name: 'Baseball' },
  { name: 'Football' },
  { name: 'Basketball' },
  { name: 'Cryptocurrency' },
  { name: 'Hockey' },
  { name: 'Football' },
  { name: 'Basketball' },
];

export default FollowFavoriteGame;
