# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a RESTful API using the FastAPI framework to manage a collection of items. You'll learn how to create endpoints, handle HTTP requests, validate data, and structure an API following REST principles.

## 📝 Tasks

### 🛠️ Create Basic CRUD Endpoints

#### Description

Set up a FastAPI application with endpoints that allow users to create, read, update, and delete items in a collection. Start with in-memory storage (a Python list or dictionary) to focus on API fundamentals.

#### Requirements

Completed API should:

- Define a data model using Pydantic for type validation
- Implement GET endpoint to retrieve all items
- Implement POST endpoint to create a new item
- Implement GET endpoint with ID parameter to retrieve a single item
- Implement PUT endpoint to update an existing item
- Implement DELETE endpoint to remove an item
- Return appropriate HTTP status codes (200, 201, 404, etc.)


### 🛠️ Add Data Validation and Error Handling

#### Description

Enhance the API with request validation, error handling, and meaningful error responses. Ensure the API gracefully handles edge cases and invalid inputs.

#### Requirements

Completed API should:

- Validate incoming request data using Pydantic models
- Return 400 Bad Request for invalid data with error details
- Return 404 Not Found when trying to access non-existent items
- Include proper error message responses
- Handle and document potential API errors in code comments


### 🛠️ Implement Filtering and Searching (Stretch Goal)

#### Description

Add advanced query features to make the API more powerful. Allow clients to filter items by properties and search by name or description.

#### Requirements

Completed API should:

- Accept optional query parameters for filtering (e.g., `?category=books`)
- Support search by name or description
- Return filtered results in the same response format
- Handle multiple filters gracefully
