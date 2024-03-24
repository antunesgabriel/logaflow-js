type MessageData = {
  from: "logaflowwidget" | "logaflowupload" | "logaflowlib";
  action?: "open";
  state?: {
    open: boolean;
  };
};
