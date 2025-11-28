# Delivro Shipment Dashboard

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## How to run the project


To run the project locally follow these steps:

1. Create `.env` file in root folder and copy values from .env.example
2. First time only - run `npm run docker:build` to build docker images
3. Run `npm run docker:dev` to start both PostgreSQL Server database and your application (with hot reload through
   mounting volumes)
4. First time only - run `npm run db:migrate` to apply migrations
5. App is available at `localhost:3000`
