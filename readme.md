# Users API

## User Schema
<pre>
id: String (Required) (Unique)
name: String
Info: Object
</pre>
Note: More fields can be added if required

## API Calls

### GET /api/users
Returns an array containing all the users

### POST /api/users
<pre>
content-type: application/json 
{ 
    "id": "userID",
    ["name": "userName",]
    ["Info": otherInfo]
}
</pre>
Adds new user to the list (User must have a unique ID)
If deletion is successful API responds with status 201.

### GET /api/users/:userID
Finds and returns a user with id equal to userID.
Returns null if no matches are found.

### PUT /api/users/:userID
<pre>
content-type: application/json
{
    ["id": "userID",]
    ["name": "userName",]
    ["Info": otherInfo]
}
</pre>
Finds the user with id equal to userID and updates its data.
If update is successful API responds with status 201.
If no matches are found, API responds with 404 status.

### DELETE /api/users/:userID
Finds and deletes the user with id equal to userID.
If deletion is successful API responds with status 204.
If no matches are found, API responds with 404 status.

### Error Handling
In case of other errors, API returns the error-message with status code 500.
