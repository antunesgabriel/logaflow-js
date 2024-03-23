/* eslint-disable @typescript-eslint/no-explicit-any */

type SourceType = "video" | "image" | "rrweb";

type ProjectReport = {
  id: string;
  title: string;
  comment: string;
  url: string;
  sourceType: SourceType;
  sourceLocation: string | null;
  logLocation: string;
  isPublicByLink: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  projectID: string;
  status: "open" | "done" | "inprogress";
};

type StorageLocationResponse = {
  url: string;
  key: string;
  expireAt: number;
};

type ApiErrorCode =
  | "fail_on_db_interaction"
  | "user_cant_do_that"
  | "not_found"
  | "invalid_field"
  | "db_is_down"
  | "provider_has_problem"
  | "user_exist_in_another_provider"
  | "code_is_invalid"
  | "fail_on_generate_token"
  | "storage_not_found"
  | "storage_unavailable"
  | "user_already_exist_in_other_provider"
  | "internal"
  | "unauthorized"
  | "authenticate_failed";

type ApiResponse<T> = {
  data: T;
  errorMessage?: string;
  errorCode?: ApiErrorCode;
};

type CreateReportParams = {
  comment: string;
  session: Session | null;
  sourceBase64: string | null;
  key: string;
  sourceType: SourceType;
  type: CreateReportDTO["type"];
  identify: string;
};

type CreateReportDTO = {
  title: string;
  comment: string;
  url: string;
  sourceType: SourceType;
  sourceLocation?: string;
  logLocation: string;
  key: string;
  type: "bug" | "idea" | "other";
  identify?: string;
};

type PatchReportDTO = {
  id: string;
  isPublicByLink?: boolean;
  status?: "open" | "done" | "inprogress";
  type?: "bug" | "idea" | "other";
  projectID: string;
};

type Level = "info" | "warn" | "error";

type JSONConfig = {
  originsAllowed: "all" | "specifics";
  origins?: string[];
  logLevels: Level[];
  enableReplay: boolean;
};

type Configuration = {
  id?: string;
  projectID: string;
  overrideRequestJsonValues: boolean;
  overrideResponseJsonValues: boolean;
  config: JSONConfig;
};
