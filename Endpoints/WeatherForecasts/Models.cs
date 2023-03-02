using ViteReduxTemplate.Models;

namespace WeatherForecasts;

public class Response
{
    public IEnumerable<WeatherForecast> WeatherForecasts { get; set; } = Enumerable.Empty<WeatherForecast>();
}
