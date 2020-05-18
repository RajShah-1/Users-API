# Users API

## User Schema
id: String (Required) (Unique)
name: String
Info: Object
(Note: More fields can be added if required)

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

### GET /api/users/:userID
Finds a user with id equal to userID.
Return null if no matches are found.

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
If no matches are found, API responds with 404 status.

### DELETE /api/users/:userID
Finds and deletes the user with id equal to userID.
If no matches are found, API responds with 404 status.  