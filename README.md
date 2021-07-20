<h1 align="center">
🌐 COMPSCI 399 MERN Project
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<!-- <p align="center">
   <a href="https://travis-ci.com/amazingandyyy/mern">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p> -->

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download

```terminal
$ git clone https://github.com/ygua699/COMPSCI399-Group-Project.git
$ npm install
```

## Project structure

```terminal
LICENSE
package.json
backend/
   package.json
   .env (to create .env, check [prepare your secret session])
frontend/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequirements

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side(Frontend) usage(PORT: 3000)

```terminal
$ cd frontend   // go to client folder
$ npm i       // npm install pacakges
$ npm start // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side(Backend) usage(PORT: 5000)

### Start

```terminal
$ cd backend   // go to server folder
$ npm i       // npm install pacakges
$ npm run server // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

# Dependencies(tech-stacks)

| Client-side                   | Server-side           |
| ----------------------------- | --------------------- |
| axios: ^0.15.3                | bcrypt-nodejs: ^0.0.3 |
| babel-preset-stage-1: ^6.1.18 | body-parser: ^1.15.2  |
| lodash: ^3.10.1               | cors: ^2.8.1          |
| react: ^16.2.0                | dotenv: ^2.0.0        |
| react-dom: ^16.2.0            | express: ^4.14.0      |
| react-redux: ^4.0.0           | jwt-simple: ^0.5.1    |
| react-router-dom: ^4.2.2      | mongoose: ^4.7.4      |
| redux: ^3.7.2                 | morgan: ^1.7.0        |
| redux-thunk: ^2.1.0           |


## Contributor

[Melo Guan](https://meloguan.info)

