# Delivro Shipment Dashboard

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## How to run the project

To run the project locally follow these steps:

1. Create `.env` file in root folder and copy values from .env.example
2. Run `npm run db:start` to start database in Docker. If you don't want to use docker and you want to connect to different DB, change `DATABASE_URL` in .env to corresponding connection string.
3. Run `npm run db:migrate` to apply migrations
4. Run `npm run dev` to start application
5. App is available at `localhost:3000`
