/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    _logaflow_v2?: {
      identify?: string;
      startSessionMonitor(config: JSONConfig): void;
      getSession(): Session;
    };
    logaflowIdentify: (identify: string) => void;
  }
}
