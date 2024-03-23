type Language = "en" | "pt";

type LanguageProviderState = {
  setLanguage: (lang: Language) => void;
  language: Language;
};

type AppProviderState = {
  project: {
    key: string;
    configuration: Configuration;
  } | null;
  open: boolean;
  openPopUp: () => void;
  type: CreateReportDTO["type"] | undefined;
  onSelectType: (type: CreateReportDTO["type"]) => void;
  reset: () => void;
  screenshot: string | null;
  setScreenshot: (imageBase64: string | null) => void;
  drawing: boolean;
  draw: (screenshot: string | null) => void;
  cancelDraw: () => void;
  saveDraw: (drawer: string | null) => void;
  session: Session | null;
  triggerText: string;
};

type Environment = {
  userAgent: string;
  language: string;
  browser: {
    name?: string;
    version?: string;
  };
  os: {
    name?: string;
    version?: string;
    versionName?: string;
  };
  platform: {
    model: string | undefined;
    type: string | undefined;
    vendor: string | undefined;
  };
  browserDimensions: {
    width: number;
    height: number;
  };
  screenDimensions: {
    width: number;
    height: number;
  };
  devicePixelRatio: number;
};

type Network = {
  requestId: string;
  api: InitiatorType;
  statusCode: number;
  url: string;
  response: {
    headers?: AppHeaders;
    body?: AppBody;
  };
  request: {
    headers?: AppHeaders;
    body?: AppBody;
  };
  method?: string;
  timestamp: number;
};

type ConsoleLog = {
  type: "error" | "info" | "warn";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: Array<string | number | any>;
  timestamp: number;
};

type Attribute = {
  url: string;
  environment: Environment;
};

type Session = {
  attributes: Attribute | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rrweb: any[];
  network: Network[];
  console: ConsoleLog[];
};

type MessageData = {
  from: "logaflowwidget" | "logaflowupload";
  payload?: CreateReportParams;
};
