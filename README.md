# Express Mongoose Template (Typescript)

This is a template for API development with express, mongodb, typescript and docker compose.

## Requirements
* Docker
* Docker Compose

## Setup
1. Clone the repository to a directory

```bash
$ git clone https://github.com/PieroNarciso/express-mongoose-tsc.git
```

2. Configure `.env.dev` file

```
DB_PORT=<PORT> // Port to be expose in your local computer for the DB
API_PORT=<PORT> // Port to be expose in your local computer for the the API
```

3. Build and run the container with `docker-compose`

Pull mongodb image and create and image for the api
```bash
$ docker-compose --env-file .env.dev build
````

Run the services
```bash
$ docker-compose --env-file .env.dev up
```

To stop the services
```bash
$ docker-compose --env-file .env.dev down
```
