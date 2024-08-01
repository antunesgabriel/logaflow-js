/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    _logaflow_v2?: {
      identify?: string;
    };
    logaflowIdentify: (identify: string) => void;
    logaflowWidgetSSOAuth: (ssoToken: string) => void;
    _is_logaflow_debug?: bollean;
  }
}
