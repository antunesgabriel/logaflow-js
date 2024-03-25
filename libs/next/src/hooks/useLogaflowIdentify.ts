import { useCallback } from 'react';

export function useLogaflowIdentify() {
  const identifyUser = useCallback((user: string) => {
    if (window.logaflowIdentify) {
      window.logaflowIdentify(user);
    }
  }, []);

  return { identifyUser };
}
