'use client';

import { useCallback, useEffect, useState } from 'react';
const { VITE_ENVRIOMENT } = import.meta.env;

const SCRIPT_ID = 'logaflow-webcomponent-js';
const WEBCOMPONENT_URL =
  VITE_ENVRIOMENT === 'development'
    ? 'http://localhost:4343'
    : 'https://widget.logaflow.com';

/* eslint-disable-next-line */
export interface LogaflowWidgetProps {
  projectKey: string;
  useCustomTrigger?: boolean;
}

export function LogaflowWidget({
  projectKey,
  useCustomTrigger,
}: LogaflowWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  const boot = useCallback(() => {
    if (document.querySelector('#' + SCRIPT_ID)) {
      setLoaded(true);
      return;
    }

    const $script = document.createElement('script');

    $script.crossOrigin = 'true';
    $script.async = true;
    $script.type = 'module';
    $script.src = `${WEBCOMPONENT_URL}/addons/logaflow-widget.es.js?version=1.0.0`;

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
    ></logaflow-widget>
  );
}
