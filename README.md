<h1 align="center">🐶Dogs House Service Test Task🐶</h1>

- [✨DEMO✨](https://www.loom.com/share/b21360192a5c4f4f88db23a5c54a6ee8?sid=5b45be4f-4692-4bfd-8a3d-976494aa15c2)
- [✏️TASK✏️](https://docs.google.com/document/d/1K8W7O7YKX38-qAt9g1mddOi5td4ZI1q0zk1J42BNm-M/edit?usp=sharing)

 <h2 align="center">📋About📋</h2>
<p>This is the application for the Dog House Service, a RESTful API that allows you to manage information about dogs in a dog house.</p>

<h2 align="center">🧙‍♂️Technologies used🧙‍♂️</h2>

 - ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 - ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
 - ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
 - ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
 - ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
 - ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 - ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
 - Prettier


<h2 align="center">🚀Getting started🚀</h2>

To run the Dog House Service, you need to follow these steps:

Clone the repository:

``` bash
git clone https://github.com/your-username/dog-house-service.git
```

Install the dependencies:
``` bash
cd dog-house-service
npm install
```

Set up the database configuration:
- Create a .env file in the root directory of the project.
- Add the following environment variables to the .env file:

``` bash
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
DATABASE_HOST=your_database_host
```

Replace your_database_name, your_database_username, your_database_password, and your_database_host with your actual database information.
Run the service:

``` bash
npm run start:local
```

Now you can access the Dog House Service API at http://localhost:3000.

<h2 align="center">📌API Endpoints📌</h2>

***/dogs Endpoint***

<h3> Retrieves a list of dogs in the dog house:</h3>

```bash
GET /dogs
```

Query Parameters:
- attribute (optional): The attribute to sort the dogs by. Possible values: name, color, tailLength, weight. 
- order (optional): The order to sort the dogs. Possible values: ASC, DESC. Default: ASC.
- pageNumber (optional, works with pageSize): The page number to retrieve.
- pageSize (optional, works with pageNumber): The number of dogs per page.

<p>Response body:</p>

- Success (200 OK):

```bash
{
  "totalPages": 3,
  "prevPage": 1,
  "nextPage": 3,
  "dogs": [
    {
      "name": "Neo",
      "color": "red&amber",
      "tailLength": 22,
      "weight": 32
    },
    {
      "name": "Jessy",
      "color": "black",
      "tailLength": 7,
      "weight": 14
    },
    ...
  ]
}
```
---

***/dog Endpoint***

<p>Creates a new dog in the dog house:</p>

```bash
POST /dog
```

Request Body:

``` bash
{
  "name": "Max",
  "color": "black",
  "tailLength": 12,
  "weight": 22
}
```

<p>Response body:</p>

- Success (201 Created):

``` bash
{
  "name": "Max",
  "color": "black",
  "tailLength": 12,
  "weight": 22
}
```

---

***/ping Endpoint***

<p>Returns the version of the Dog House Service:</p>

``` bash
GET /ping
```

<p>Response body:</p>

- Success (200 OK):

``` bash
Dog House Service.Version1.0.1
```

<h2 align="center">🔧Error Handling🔧</h2>

- 400 Bad Request

<p>Response Body:</p>

``` bash
{
  "error": "Missing some required fields (name, color, tailLength, weight)"
}
```

...or...


``` bash
{
  "error": "Invalid tail length value. It must be a positive number"
}
```

...or...


``` bash
{
  "error": "Invalid weight value. It must be a positive number"
}
```

- 409 Conflict

<p>Response Body:</p>

``` bash
{
  "error": `A dog with the name ${name} already exists`
```

- 500 Internal Server Error

<p>Response Body:</p>

``` bash
{
  "error": "Internal server error"
}
```
