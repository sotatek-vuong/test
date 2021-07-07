import React from 'react';

export interface UseRenderCounterProps {
  key?: string;
}

const useRenderCounter = (
  { key }: UseRenderCounterProps = { key: 'Render:' },
) => {
  const count = React.useRef(0);
  count.current++;
  console.log(key, count);
};

export default useRenderCounter;
