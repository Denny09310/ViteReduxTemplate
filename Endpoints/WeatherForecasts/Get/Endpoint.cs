namespace ViteReduxTemplate.WeatherForecasts.Get;

public class Endpoint : EndpointWithoutRequest<Response>
{
    public override void Configure()
    {
        Get("/weather-forecasts");
        AllowAnonymous();
        Description(e => e.WithName("GetWeatherForecasts"));
    }

    public override Task HandleAsync(CancellationToken ct)
    {
        Response.WeatherForecasts = Data.GetWeatherForecasts();

        return SendOkAsync(Response, ct);
    }
}