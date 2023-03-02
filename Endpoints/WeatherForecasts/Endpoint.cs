using Microsoft.AspNetCore.Authorization;

namespace WeatherForecasts;

[HttpGet("/weather-forecasts"), AllowAnonymous]
public class GetWeatherForecastsEndpoint : EndpointWithoutRequest<Response>
{
    public override Task HandleAsync(CancellationToken ct)
    {
        Response.WeatherForecasts = Data.GetWeatherForecasts();

        return SendOkAsync(Response, ct);
    }
}