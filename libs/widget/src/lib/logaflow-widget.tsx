const { VITE_STATIC_URL } = import.meta.env;

/* eslint-disable-next-line */
export interface WidgetProps {
  projectKey: string;
  useDefaultTrigger?: boolean;
}

export function LogaflowWidget(props: WidgetProps) {
  return (
    <div>
      <h1>Welcome to Widget!</h1>
    </div>
  );
}

export default LogaflowWidget;
