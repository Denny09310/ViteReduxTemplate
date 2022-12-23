import { useGetWeatherForecastQuery } from '@/api/weatherForecast';
import React from 'react';

const columns = ['Date', 'Summary', 'Temperature °C', 'Temperature °F'];

const WeatherForecastTable: React.FC = () => {
	const { data: forecasts, isLoading, isError, error } = useGetWeatherForecastQuery();

	if (isLoading) return <span>Loading...</span>;

	if (isError) return <p>{JSON.stringify(error)}</p>;

	return (
		<div className='overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{forecasts?.map((row, index) => (
						<tr key={index}>
							<td>{row.date}</td>
							<td>{row.summary}</td>
							<td>{row.temperatureC}</td>
							<td>{row.temperatureF}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default WeatherForecastTable;

