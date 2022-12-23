import { baseApi as api } from "@/api/baseApi";
export const addTagTypes = ["Weather-Forecasts"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getWeatherForecasts: build.query<
        GetWeatherForecastsApiResponse,
        GetWeatherForecastsApiArg
      >({
        query: () => ({ url: `/api/weather-forecasts` }),
        providesTags: ["Weather-Forecasts"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type GetWeatherForecastsApiResponse = /** status 200 Success */ Response;
export type GetWeatherForecastsApiArg = void;
export type WeatherForecast = {
  date?: string;
  temperatureC?: number;
  temperatureF?: number;
  summary?: string | null;
};
export type Response = {
  weatherForecasts?: WeatherForecast[];
};
export const { useGetWeatherForecastsQuery } = injectedRtkApi;
