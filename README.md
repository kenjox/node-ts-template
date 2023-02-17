# REST API with Node.js, Mongoose & TypeScript

## Technologies & Packages

- Node
- MongoDB with Mongoose
- TypeScript
- Express
- Zod validation
- config
- Docker

## How to run the code

- Clone the repo to your local machine
- Change into the cloned directory
- Edit the `.env.example` to `.env` and adjust the varaibles accordingly or use default values

### Local dev setup (Typescript code)

- To run in development mode i.e Typescript code
  - Run `docker compose -f docker-compose.dev.yml up`
- The server will be started as per env settings in `.env` `http://localhost:<NODE_PORT>`

### Production setup (Javascript build code)

- To run in production mode i.e Typescript code
  - Run `docker compose -f docker-compose.dev.yml up`
- The server will be started as per env settings in `.env` `http://localhost:<NODE_PORT>`

## List of available endpoints

- /health
- GET /api/v1/users
- POST /api/v1/users
- GET /api/v1/users/<userId>
- PUT /api/v1/users/<userId>
- DELETE /api/v1/users/<userId>

## TODO

- Integrate swagger or similar tool for viewing the endpoints instead of listing as above 🙈
- Add metrics using prometheus
- Add Grafana board for monitoring
