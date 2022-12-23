using ViteReduxTemplate.Models;

namespace ViteReduxTemplate.WeatherForecasts.Get;

public class Response
{
    public IEnumerable<WeatherForecast> WeatherForecasts { get; set; } = Enumerable.Empty<WeatherForecast>();
}
