declare namespace JSX {
  interface IntrinsicElements {
    'logaflow-widget': {
      'project-key': string;
      'use-custom-trigger'?: boolean;
      'user-id'?: string;
      'trigger-text'?: string;
      name?: string;
      email?: string;
      avatar?: string;
    };
  }
}
