import { useCallback } from 'react';

type User = {
  id?: string;
  email: string;
  name: string;
  avatar?: string;
};

export function useLogaflowUser() {
  const setUser = useCallback((user: User) => {
    window.postMessage(
      {
        from: 'logaflowlib',
        action: 'setuser',
        payload: {
          user,
        },
      },
      window.location.origin
    );
  }, []);

  return { setUser };
}
