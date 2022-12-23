using FluentValidation.Results;

namespace ViteReduxTemplate.PostProcessors;

public class ErrorLogger : IGlobalPostProcessor
{
    public Task PostProcessAsync(object req, object? res, HttpContext ctx, IReadOnlyCollection<ValidationFailure> failures, CancellationToken ct)
    {
        if (failures.Any())
        {
            var logger = ctx.Resolve<ILogger<ErrorLogger>>();

            foreach (var failure in failures)
            {
                logger.LogError("Unhandled Exception: {Exception} {Severity}", failure.ErrorMessage, failure.Severity);
            }
        }

        return Task.CompletedTask;
    }
}