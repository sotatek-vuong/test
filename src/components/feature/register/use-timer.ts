import moment from 'moment';
import { useState, useEffect } from 'react';

export type UseTimer = (props?: {
  initialSeconds?: number;
  immediate?: boolean;
}) => [string, () => void | undefined, boolean, () => void | undefined];

const useTimer: UseTimer = ({
  initialSeconds = 120,
  immediate = false,
} = {}) => {
  const [value, setValue] = useState(initialSeconds);
  const [isExecuting, setIsExecuting] = useState(immediate);

  function execute() {
    setIsExecuting(true);
  }
  function reset(_immediate: boolean = true) {
    setIsExecuting(_immediate);
    setValue(initialSeconds);
  }

  useEffect(() => {
    const token = setTimeout(() => {
      if (value > 0 && isExecuting) {
        setValue(value - 1);
      }
    }, 1000);

    if (value <= 0 && isExecuting) {
      setIsExecuting(false);
      clearTimeout(token);
    }

    return () => {
      clearTimeout(token);
    };
  }, [isExecuting, value]);

  const message = `Resend OTP in ${moment(value * 1000).format('mm:ss')}`;

  return [message, execute, value === 0, reset];
};

export default useTimer;
