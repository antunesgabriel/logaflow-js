/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

type User = {
  id?: string;
  email: string;
  name: string;
  avatar?: string;
};

declare global {
  interface Window {
    _logaflow_v2?: {
      identify?: string;
    };
    logaflowUser?: (user: {
      id?: string;
      email: string;
      name: string;
      avatar?: string;
    }) => void;
    logaflowWidgetSSOAuth: (ssoToken: string) => void;
    _is_logaflow_debug?: bollean;
  }
}
