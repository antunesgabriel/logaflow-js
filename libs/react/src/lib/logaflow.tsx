import { useCallback, useEffect, useState } from 'react';

const SCRIPT_ID = 'logaflow-webcomponent-js';
/* eslint-disable-next-line */
export interface LogaflowWidgetProps {
  projectKey: string;
  useCustomTrigger?: boolean;
  userId?: string;
  name?: string;
  email?: string;
  avatar?: string;
  triggerText?: string;
}

export function LogaflowWidget({
  projectKey,
  useCustomTrigger,
  userId,
  name,
  email,
  avatar,
  triggerText,
}: LogaflowWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  const boot = useCallback(() => {
    if (document.querySelector('#' + SCRIPT_ID)) {
      setLoaded(true);
      return;
    }

    const $script = document.createElement('script');

    const WEBCOMPONENT_URL = window._is_logaflow_debug
      ? 'http://localhost:4001'
      : 'https://widget.logaflow.com';

    $script.crossOrigin = 'true';
    $script.async = true;
    $script.type = 'module';
    $script.src = `${WEBCOMPONENT_URL}/addons/logaflow-widget.es.js?version=1.0.4`;

    $script.onload = function () {
      setLoaded(true);
    };

    document.head.appendChild($script);
  }, []);

  useEffect(() => {
    if (!projectKey) {
      return;
    }

    boot();
  }, [boot, projectKey]);

  if (!loaded) {
    return null;
  }

  return (
    <logaflow-widget
      project-key={projectKey}
      use-custom-trigger={useCustomTrigger}
      avatar={avatar}
      email={email}
      name={name}
      user-id={userId}
      trigger-text={triggerText}
    ></logaflow-widget>
  );
}
