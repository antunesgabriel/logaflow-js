import axios from "axios";

import client from "@/config/client.config";

import { getPresignedURL } from "./storage.service";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const uploadJSON = async (jsonFile: any, k: string) => {
  const uploadData = await getPresignedURL("json", k);

  await axios.put(uploadData.data.url, jsonFile, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return uploadData.data.key;
};

const uploadImage = async (imageBase64: string, k: string) => {
  const imageLocationData = await getPresignedURL("png", k);

  const [fileName] = imageLocationData.data.key.split(".");

  const res: Response = await fetch(imageBase64);
  const blob: Blob = await res.blob();
  const file = new File([blob], fileName, { type: "image/png" });

  // const binaryData = Buffer.from(imageBase64, 'base64')

  await axios.put(imageLocationData.data.url, file, {
    headers: {
      "Content-Type": "image/png",
    },
  });

  return imageLocationData.data.key;
};

export const createReport = async (params: CreateReportParams) => {
  const report: CreateReportDTO = {
    key: params.key,
    url: params.session?.attributes?.url ?? "-",
    title: params.comment.slice(0, 50),
    comment: params.comment,
    sourceType: params.sourceType,
    logLocation: "",
    sourceLocation: undefined,
    type: params.type,
    identify: params.identify,
  };

  try {
    const key = await uploadJSON(params.session ?? {}, params.key);

    report.logLocation = key;
  } catch (err) {
    console.log("error on upload json", err);
  }

  if (report.sourceType === "image" && params.sourceBase64) {
    const key = await uploadImage(params.sourceBase64, params.key);

    report.sourceLocation = key;
  }

  const { data: reportResponse } = await client.post<ApiResponse<Report>>(
    "/v1/reports",
    report,
    {
      headers: {
        "x-api-key": params.key,
      },
    }
  );

  return reportResponse;
};
