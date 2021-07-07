import React from 'react';
import clsx from 'clsx';
import {
  InputBase,
  InputBaseProps,
  Select,
  SelectProps,
} from '@material-ui/core';
import { useController, UseControllerProps } from 'react-hook-form';

import { useStyles as useAppInputStyles } from '../app-input/styles';

import Icons from '@assets/icons';
import { useStyles } from './styles';

export interface AppSelectProps<T> extends SelectProps {
  controller: UseControllerProps<T>;
}

const AppSelect = <T extends Record<string, any>>({
  controller,
  children,
  classes,
  ...rest
}: AppSelectProps<T>) => {
  const {
    field: { name, value, onBlur, onChange, ref },
  } = useController(controller);

  const styles = useStyles();

  return (
    <Select
      inputRef={ref}
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      IconComponent={Icons.ArrowDown}
      classes={{ ...classes, icon: styles.icon, select: styles.select }}
      input={<StyledInput />}
      name={name}
      {...rest}>
      {children}
    </Select>
  );
};

const StyledInput: React.FC<InputBaseProps> = ({ classes, ...rest }) => {
  const styles = useAppInputStyles();

  return (
    <InputBase
      classes={{
        ...classes,
        root: clsx(styles.root, classes?.root),
        input: clsx(styles.input, classes?.input),
        disabled: clsx(styles.disabled, classes?.disabled),
        multiline: clsx(styles.multiline, classes?.multiline),
      }}
      {...rest}
    />
  );
};

export default AppSelect;
