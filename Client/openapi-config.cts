import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://localhost:5001/swagger/v1/swagger.json",
  apiFile: "@/api/baseApi.ts",
  apiImport: "baseApi",
  hooks: true,
  tag: true,
  outputFiles: {
    "src/api/weatherForecast.ts": {
      filterEndpoints: [/weatherForecast/i],
    },
  },
};

export default config;
