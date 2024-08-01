import { useCallback } from 'react';

export function useLogaflowSSOAuth() {
  const setSSOAuth = useCallback((ssoToken: string) => {
    let interval: any;
    let attempts = 0;
    const maxAttempts = 10;

    if (interval) {
      clearInterval(interval);
    }

    if (!window.logaflowWidgetSSOAuth) {
      interval = setInterval(() => {
        attempts += 1;

        if (attempts >= maxAttempts) {
          clearInterval(interval);
          console.error('Max attempts reached. Could not set SSO token.');
          return;
        }

        if (!window.logaflowWidgetSSOAuth) {
          return;
        }

        clearInterval(interval);
        window.logaflowWidgetSSOAuth(ssoToken);
      }, 2000);

      return;
    }

    window.logaflowWidgetSSOAuth(ssoToken);
  }, []);

  return { setSSOAuth };
}
