# Courses API

![Courses API](/public/img/Rest-API.png)

This is a backend API for a system that manages courses and students. It provides endpoints for creating, retrieving, updating, and deleting courses.

## Configuration

Before running the backend, ensure that you have the following dependencies installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- PostgreSQL (make sure you have a running PostgreSQL instance)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/jeancarlos324/coursesAPI.git
   ```

2. Install dependences:

   ```bash
   npm install
   ```

## Running

### Run Development

- Command to run in development mode

  ```bash
  npm run dev
  ```

### Run Production

- Command to run in production mode

  ```bash
  npm run start
  ```

## Documentation

Detailed documentation on API endpoints is found [here](https://documenter.getpostman.com/view/23245717/2s8YmGTQn9).

## Deployment with Docker Compose

### Start Deploy

- This command starts the containers specified in your docker-compose.yml file in detached mode (in the background).

  ```bash
  docker-compose up -d
  ```

- If you have some changes you can reboot with the following command

  ```bash
  docker restart "container_name_or_id"
  ```

### Container Configuration

- Enter a Docker container, use the following command

  ```bash
  docker exec -it "container_name_or_id" bash
  ```

### Backups with PostgreSQL Container

1. Enter a Docker container:

   ```bash
   docker exec -it "container_name_or_id" bash
   ```

2. Create backup with custom name:

   ```bash
   pg_dump -U "database_user" -d "database_name" > backup.sql
   ```

3. Copy backup on custom directory:

   ```bash
   docker cp "container_name_or_id":/backup.sql "root_directory"/backup_$(date +"%Y%m%d_%H%M%S").sql
   ```

### Other Commands

```bash
docker-compose down
```

# coursesAPI

## DOC IN POSTMAN

https://documenter.getpostman.com/view/23245717/2s8YmGTQn9

#### Link Repo

https://github.com/jeancarlos324/coursesAPI

## API URL

https://coursesapi.up.railway.app

#### Routes:

/api/v1/...

- User
- Courses
- Categories
- Videos
