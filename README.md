# WorkTimeManager API

## Description

WorkTimeManager API is an application for managing work hours, allowing users to log their entries and exits, calculating worked time, and identifying overtime.

## Features

- Logging work entries and exits.
- Automatic calculation of worked hours.
- Identification of overtime.
- Querying the balance of worked hours.

## Technologies Used

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JSON Web Token (JWT)
- ...

## Installation

1. Clone the repository: `git clone git@github.com:clovisantunes/WorkTimeManager.git`
2. Install dependencies: `npm install`
3. Configure the database in the `.env` file.
4. Run Prisma migrations: `npx prisma migrate dev`
5. Start the server: `npm start`

## Endpoints

- **POST /user**: Create a new user.
- **POST /session**: Authenticate a user and generate a JWT token.
- **GET /me**: Get details of the authenticated user.
- **POST /time**: Log an entry or exit timestamp.
- **GET /timeDetails**: Get details of user timestamps and calculate worked hours.

## Example Usage

```bash
curl -X POST -d '{"email": "user@example.com", "password": "password123"}' http://localhost:3000/session
