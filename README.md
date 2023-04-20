## NUPAT-User CRUD API

Nupat-user is a simple CRUD API which allows you to createa user, get all users created, delete users, edit users and al so find all male users

[postman link](https://documenter.getpostman.com/view/22736436/2s93Y2TNQF)
[render link] (https://nupat.onrender.com)

## Endpoints
url = render link

- url/api/users/register (POST)
- url/api/users/:userId (GET)
- url/api/users/ (GET)
- url/api/users/gender/:genderType (GET)
- url/api/users/:userId (PATCH)
- url/api/users/register (DELETE)

## HTTP REQUEST
All API requests are made by sending a secure HTTPS request using one of the following methods:

- POST Create a resource
- GET Get a resource or list of resources
- PATCH Updates a resource or list of resources
- DELETE Deletes a resource or list of resources
For POST, the body of yor request must be a JSON 

## HTTP RESPONSE CODE
Each response will be returned with one of the following HTTP status codes:

- 200 OK Successful request
- 400 Bad Request There was a problem with the request
- 500 Server Error Server error