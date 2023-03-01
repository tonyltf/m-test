import { delay } from ".";
import Logger from "./Logger";

export type myRequestConfig = RequestInit;
export type myReponse = Response;

const Request = async (
  url: string,
  config?: myRequestConfig,
  retryCount = 0
): Promise<myReponse | undefined> => {
  let response;
  try {
    response = await fetch(url, config);
  } catch (e) {
    Logger.error(e);
  }

  if (response?.ok) {
    return response;
  } else {
    if (response?.status === 429) {
      const resetTime = parseInt(
        response?.headers?.get("x-ratelimit-reset") || "0",
        10
      );
      let retryAfter: number;
      if (resetTime > new Date().getTime() / 1000) {
        retryAfter = resetTime * 1000 - new Date().getTime();
      } else {
        // exponential backoff;
        retryAfter = Math.pow(2, retryCount) * 1000 + Math.random() * 1000;
      }
      Logger.log(
        `Reached rate limit, will be retry after ${retryAfter / 1000} second(s)`
      );

      await delay(retryAfter);
      return await Request(url, config, retryCount++);
    }
  }
};

export default Request;
