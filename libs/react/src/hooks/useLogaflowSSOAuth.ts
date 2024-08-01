import { useCallback } from 'react';

export function useLogaflowSSOAuth() {
  const ssoAuth = useCallback((ssoToken: string) => {
    window.logaflowWidgetSSOAuth(ssoToken);
  }, []);

  return { ssoAuth };
}
