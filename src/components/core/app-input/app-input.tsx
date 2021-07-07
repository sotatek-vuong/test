import React from 'react';
import clsx from 'clsx';
import {
  FormControl,
  FormLabel,
  InputBase,
  InputBaseProps,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';
import { useController, UseControllerProps } from 'react-hook-form';

export interface AppInputProps<T> extends InputBaseProps {
  label?: string;
  controller: UseControllerProps<T>;
}

const AppInput = <T extends Record<string, any>>({
  label,
  controller,
  className,
  classes,
  fullWidth,
  ...rest
}: AppInputProps<T>) => {
  const styles = useStyles();

  const {
    field: { name, onChange, value, ref, onBlur },
    fieldState: { error },
  } = useController(controller);

  const err = error?.message;

  const renderInput = () => (
    <InputBase
      fullWidth={label ? undefined : fullWidth}
      className={label ? undefined : className}
      name={name}
      // @ts-ignore
      error={err}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      inputRef={ref}
      classes={{
        ...classes,
        root: clsx(styles.root, classes?.root),
        input: clsx(
          styles.input,
          err ? styles.error : styles.focusInput,
          classes?.input,
        ),
        disabled: clsx(styles.disabled, classes?.disabled),
        multiline: clsx(styles.multiline, classes?.multiline),
      }}
      {...rest}
    />
  );

  if (label) {
    return (
      <FormControl
        fullWidth={fullWidth}
        className={className}
        required={rest.required}>
        <FormLabel classes={{ asterisk: styles.asterisk }}>{label}</FormLabel>
        {renderInput()}
        <Typography color="error" variant="body2">
          {err}
        </Typography>
      </FormControl>
    );
  }

  return renderInput();
};

export default AppInput;
