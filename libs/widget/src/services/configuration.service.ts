import client from "@/config/client.config";
import { QueryFunctionContext } from "@tanstack/react-query";

export const getConfiguration = async (
  params: QueryFunctionContext<Array<string | undefined>>
) => {
  const [, key] = params.queryKey;

  const { data } = await client.get<ApiResponse<Configuration>>(
    "/v1/configurations/by-key",
    {
      headers: {
        "x-api-key": key,
      },
    }
  );

  return data;
};
