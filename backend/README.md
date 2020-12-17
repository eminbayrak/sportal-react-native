# JWT in Nodejs with Express

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is the project of building MongoDB Authentication and Authorization Server using JWT in Nodejs with Express.

### Installation
The project requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies and devDependencies and start the server.

```sh
$ cd jwt_nodejs
$ npm install -d
$ npm start
```

### Todos

 - Rename `.dorenv` to `.env`
 - Replace `.env` vars with yours

### Example REST Calls
To create an user
POST `localhost:3000/api/register` and pass the following objects in the request body
```
{
    "email": "email@email.com",
    "name": "Name",
    "password": "password",
    "user_type_id": 1
}
```
To login the user
POST `localhost:3000/api/login` and pass the following objects in the request body
```
{
    "email": "email@email.com",
    "password": "password"
}
```
### Note
Keep in mind that MondoDB doesn't like passwords that contains special chracters like `@` and `?`. You will definitely get an `undefined uri` error if it is.

License
----

MIT

**Free Software, Hell Yeah!**