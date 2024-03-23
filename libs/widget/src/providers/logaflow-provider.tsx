import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createContext } from 'use-context-selector';

import { getConfiguration } from '../services/configuration.service';

const { VITE_STATIC_URL } = import.meta.env;

export const AppContext = createContext<AppProviderState>(
  null as unknown as AppProviderState
);

export function AppProvider({
  children,
  projectKey,
  triggerCta = 'Report',
}: {
  children: React.ReactNode;
  projectKey: string;
  triggerCta?: string;
}) {
  const [project, setProject] = useState<AppProviderState['project']>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [type, setType] = useState<CreateReportDTO['type'] | undefined>();
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const triggerText = useMemo(() => triggerCta, [triggerCta]);

  const { data } = useQuery({
    queryKey: ['configuration', projectKey],
    enabled: !!projectKey,
    queryFn: getConfiguration,
  });

  const onSelectType = useCallback((value: CreateReportDTO['type']) => {
    setType(value);
  }, []);

  const reset = useCallback(() => {
    if (!window._logaflow_v2) {
      return;
    }

    setOpen(false);
    setType(undefined);
    setSession(null);
    setScreenshot(null);
    setSession(null);
    localStorage.removeItem('@logaflow:comment');

    if (!data) {
      return;
    }

    window._logaflow_v2.startSessionMonitor(data.data.config);
  }, [data]);

  const draw = useCallback((screenshot: string | null) => {
    setDrawing(true);
    setScreenshot(screenshot);
    setOpen(false);
  }, []);

  const cancelDraw = useCallback(() => {
    setDrawing(false);
    setScreenshot(null);
    setOpen(true);
  }, []);

  const saveDraw = useCallback((drawer: string | null) => {
    setDrawing(false);
    setOpen(true);
    setScreenshot(drawer);
  }, []);

  const openPopUp = useCallback(() => {
    if (!window._logaflow_v2) {
      return;
    }

    setOpen(true);
    setSession(window._logaflow_v2.getSession());
  }, []);

  useEffect(() => {
    if (!data?.data || !projectKey || !window._logaflow_v2) {
      return;
    }

    window._logaflow_v2.startSessionMonitor(data.data.config);

    setProject({
      key: projectKey,
      configuration: data.data,
    });
  }, [data, projectKey]);

  const values = useMemo(() => {
    return {
      open,
      openPopUp,
      project,
      type,
      onSelectType,
      reset,
      screenshot,
      setScreenshot,
      draw,
      drawing,
      cancelDraw,
      saveDraw,
      session,
      triggerText,
    };
  }, [
    cancelDraw,
    draw,
    drawing,
    onSelectType,
    open,
    openPopUp,
    project,
    reset,
    saveDraw,
    screenshot,
    session,
    triggerText,
    type,
  ]);

  if (!projectKey || !data?.data || window._logaflow_v2?.startSessionMonitor) {
    return null;
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
