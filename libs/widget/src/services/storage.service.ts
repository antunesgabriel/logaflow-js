import client from "@/config/client.config";

export const getPresignedURL = async (fileType: string, key: string) => {
  const { data } = await client.get<ApiResponse<StorageLocationResponse>>(
    `/v1/storage?fileType=${fileType}`,
    {
      headers: {
        "x-api-key": key,
      },
    }
  );

  return data;
};
