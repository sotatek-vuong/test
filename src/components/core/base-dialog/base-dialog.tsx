import {
  Dialog,
  DialogProps,
  IconButton,
  IconButtonProps,
} from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './styles';
import Icons from '@assets/icons';

export interface BaseDialogProps extends DialogProps {
  showCloseIcon?: boolean;
  closeIconProps?: IconButtonProps;
}

const BaseDialog: React.FC<BaseDialogProps> = ({
  showCloseIcon,
  closeIconProps,
  onClose,
  children,
  classes,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <Dialog
      onClose={onClose}
      scroll="body"
      classes={{
        ...classes,
        paper: clsx(styles.paper, classes?.paper),
      }}
      {...rest}>
      {showCloseIcon && onClose && (
        <IconButton
          {...closeIconProps}
          onClick={(e) => {
            onClose(e, 'escapeKeyDown');
            closeIconProps?.onClick?.(e);
          }}
          className={clsx(styles.closeIcon, closeIconProps?.className)}>
          <Icons.Close />
        </IconButton>
      )}
      {children}
    </Dialog>
  );
};

export default BaseDialog;
