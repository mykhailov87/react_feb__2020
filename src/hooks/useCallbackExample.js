// Core
import { useCallback, useMemo } from 'react';

export function useCallbackExample(props) {
  const handler = useCallback(() => {
    console.log(props.name);
  }, [props.name]);

  const data = useMemo(() => ({ name: 'Mark' }), []);
}
