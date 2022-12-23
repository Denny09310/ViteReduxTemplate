namespace ViteReduxTemplate.Endpoints;

public class WeatherForecastController : EndpointWithoutRequest<IEnumerable<WeatherForecast>>
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    public override void Configure()
    {
        Get("/weatherForecast");
        AllowAnonymous();

        Description(e => e
            .WithName("GetWeatherForecast"));
    }

    public override Task HandleAsync(CancellationToken ct)
    {
        return SendOkAsync(Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray(), ct);
    }
}
