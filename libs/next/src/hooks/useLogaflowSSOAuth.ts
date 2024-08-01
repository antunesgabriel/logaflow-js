import { useCallback } from 'react';

export function useLogaflowSSOAuth() {
  const setSSOAuth = useCallback((ssoToken: string) => {
    if (!!window.logaflowWidgetSSOAuth) {
      window.logaflowWidgetSSOAuth(ssoToken);
      return;
    }

    setTimeout(() => window.logaflowWidgetSSOAuth(ssoToken), 2000);
  }, []);

  return { setSSOAuth };
}
