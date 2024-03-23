import { useEffect } from 'react';

const { VITE_STATIC_URL } = import.meta.env;

/* eslint-disable-next-line */
export interface WidgetProps {
  projectKey: string;
  useDefaultTrigger?: boolean;
}

export function LogaflowWidget(props: WidgetProps) {
  useEffect(() => {
    if (document.querySelector('#logaflow-addon')) {
      return;
    }

    const scriptTag = document.createElement('script');

    if (VITE_STATIC_URL.includes('localhost')) {
      scriptTag.src = `${VITE_STATIC_URL}/dist/core@1_0_0.js`;
    } else {
      scriptTag.src = `${VITE_STATIC_URL}/core@1_0_0.js`;
    }

    scriptTag.id = 'logaflow-addon';
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.crossOrigin = '';
    scriptTag.type = 'text/javascript';
    scriptTag.onload = function () {
      if (window._logaflow_v2) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.setupLogaflow(VITE_WIDGET_KEY);
      }
    };

    document.body.appendChild(scriptTag);
  }, []);

  return (
    <div>
      <h1>Welcome to Widget!</h1>
    </div>
  );
}

export default LogaflowWidget;
