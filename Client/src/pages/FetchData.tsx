import { WeatherForecastTable } from "@/reducers";
import React from "react";

const FetchData: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Fetch Data</h1>
      <p>This page demonstrates how to fetch data from the server</p>
      <WeatherForecastTable />
    </div>
  );
};

export default FetchData;
