import { useCallback, useEffect, useState } from 'react';

export function useLogaflowPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMessage = useCallback(($event: MessageEvent<MessageData>) => {
    const { data } = $event;

    if (data.from !== 'logaflowwidget') {
      return;
    }

    if (data.state) {
      setIsOpen(data.state.open);
    }
  }, []);

  const open = useCallback(() => {
    const openData: MessageData = {
      from: 'logaflowlib',
      action: 'open',
    };

    window.postMessage(openData, window.location.origin);
  }, []);

  useEffect(() => {
    window.removeEventListener('message', handleMessage);

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);

  return { isOpen, open };
}
