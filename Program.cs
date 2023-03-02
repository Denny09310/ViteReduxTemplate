global using FastEndpoints;
using System.Text.Json.Serialization;
using FastEndpoints.Swagger;
using ViteReduxTemplate.PostProcessors;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddFastEndpoints(c => c.SourceGeneratorDiscoveredTypes = DiscoveredTypes.All);
builder.Services.AddSwaggerDoc(shortSchemaNames: true, addJWTBearerAuth: false);

builder.Services.AddCors(builder
    => builder.AddDefaultPolicy(opt
        => opt.AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials()
              .WithOrigins("https://localhost:3000")));

var app = builder.Build();

app.UsePathBase("{NoLastSlashPathbase}");
app.UseCors();

if (!app.Environment.IsDevelopment())
    app.UseHsts();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseDefaultExceptionHandler();

app.UseAuthorization();

app.UseFastEndpoints(c =>
{
    c.Endpoints.RoutePrefix = "api";
    c.Endpoints.ShortNames = true;
    c.Endpoints.Configurator = ep =>
    {
        ep.PostProcessors(Order.After, new ErrorLogger());
    };

    c.Serializer.Options.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

if (app.Environment.IsDevelopment())
    app.UseSwaggerGen();

app.MapFallbackToFile("index.html");

app.Run();
