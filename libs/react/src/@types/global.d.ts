/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    _logaflow_v2?: {
      identify?: string;
    };
    logaflowIdentify: (identify: string) => void;
  }
}
