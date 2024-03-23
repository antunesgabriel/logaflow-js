type InitiatorType =
  | "audio"
  | "beacon"
  | "body"
  | "css"
  | "early-hint"
  | "embed"
  | "fetch"
  | "frame"
  | "iframe"
  | "icon"
  | "image"
  | "img"
  | "input"
  | "link"
  | "navigation"
  | "object"
  | "ping"
  | "script"
  | "track"
  | "video"
  | "xmlhttprequest";

type NetworkRequest = {
  url: string;
  method?: string;
  initiatorType: InitiatorType;
  status?: number;
  requestHeaders?: AppHeaders;
  requestBody?: AppBody;
  responseHeaders?: AppHeaders;
  responseBody?: AppBody;
};

type NetworkRecordOptions = {
  initiatorTypes?: InitiatorType[];
  ignoreRequestFn?: (data: NetworkRequest) => boolean;
  recordHeaders?: boolean | { request: boolean; response: boolean };
  recordBody?:
    | boolean
    | string[]
    | { request: boolean | string[]; response: boolean | string[] };
  recordInitialRequests?: boolean;
};

type AppHeaders = Record<string, string>;
type AppBody =
  | string
  | Document
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null;

type NetworkData = {
  requests: NetworkRequest[];
  isInitial?: boolean;
};
