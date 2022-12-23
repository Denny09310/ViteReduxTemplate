using System.Text.Json.Serialization;
using FastEndpoints.Swagger;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

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
app.UseDefaultExceptionHandler();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthorization();

app.UseFastEndpoints(c =>
{
    c.Endpoints.RoutePrefix = "api";
    c.Endpoints.ShortNames = true;

    c.Serializer.Options.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

if (app.Environment.IsDevelopment())
    app.UseSwaggerGen();

app.MapFallbackToFile("index.html");

app.Run();
