````md
# Todo Application – Backend (ASP.NET Core Web API)

This is the backend for the Todo Application built using ASP.NET Core Web API. It provides RESTful APIs for managing todos, including CRUD operations, search, category filtering, priority levels, and proper exception handling.

## Features

- Create, read, update, and delete todo items
- Search todos
- Filter todos by category (Work, Personal)
- Priority levels (High, Medium, Low)
- Structured REST API
- Global exception handling
- Clean and scalable architecture

## Tech Stack

- C# (.NET Web API)
- ASP.NET Core (.NET Latest Version)
- Entity Framework Core
- SQL Server (or any configured database)

## Prerequisites

Make sure you have installed:

- .NET SDK (latest version)
- SQL Server (or any configured DB)
- Visual Studio / VS Code

Check .NET installation:

```bash
dotnet --version
````

## Setup Instructions

Clone the repository:

```bash
git clone <repo-url>
cd <project-folder>
```

Restore dependencies:

```bash
dotnet restore
```

Run database migrations (if applicable):

```bash
dotnet ef database update
```

## Running the Application

Start the Web API:

```bash
dotnet run
```

The API will typically run on:

```
https://localhost:5001
http://localhost:5000
```

## API Endpoints

Example endpoints:

* GET /api/todos
* GET /api/todos/{id}
* POST /api/todos
* PUT /api/todos/{id}
* DELETE /api/todos/{id}
* GET /api/todos/search?query=

## Notes

* Ensure database connection string is correctly configured in `appsettings.json`
* Enable CORS if connecting with frontend
* Use latest .NET version for best compatibility

```
```
