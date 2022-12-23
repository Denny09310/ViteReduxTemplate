import { baseApi as api } from "@/api/baseApi";
export const addTagTypes = ["Weatherforecast"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getWeatherForecast: build.query<
        GetWeatherForecastApiResponse,
        GetWeatherForecastApiArg
      >({
        query: () => ({ url: `/api/weatherForecast` }),
        providesTags: ["Weatherforecast"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as enhancedApi };
export type GetWeatherForecastApiResponse =
  /** status 200 Success */ WeatherForecast[];
export type GetWeatherForecastApiArg = void;
export type WeatherForecast = {
  date?: string;
  temperatureC?: number;
  temperatureF?: number;
  summary?: string | null;
};
export const { useGetWeatherForecastQuery } = injectedRtkApi;
