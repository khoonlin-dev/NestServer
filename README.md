# Introduction

This is a server written using nest-js and typeorm, working on postgresql database.

## Setup

1. Make sure port 3000 of localhost is available.
2. Run `yarn install` and `yarn run start:dev`. The server will start on localhost:3000
3. Go to `localhost:3000/search/get` in your browser and you should see the following data:
   [Data](doc/data.png)
4. If there is nothing at all, elephantDb could be dead already... Then the next section is for you
5. If no issues, you can skip the next two **(FALLBACK)** sections

## (FALLBACK) If previous step failed

1. Quit the host process that `yarn run start:dev` was running before proceeding the next steps
2. You have to host your own postgresql database.
3. Create a new database named "shop"
4. Do not add anything to it for now. **MAKE SURE IT IS A CLEAN DB**
5. Open the sample .env
6. Change the `DB_NAME` to "shop"
7. Add your host to `DB_HOST`, port to `DB_PORT`, user name and password (for testing purpose only. the credentials should be stored elsewhere) to `DB_USERNAME` and `DB_PASSWORD`.
8. Run `yarn install` and `yarn run start:dev`. The server will start syncing with the Db
9. If there is error, make sure your user have enough permission to create public schemas and try again.
10. If there is no error, check your postgresql db management tool or cli to make sure there are at least **SEVEN** tables and **TWO** views

## (FALLBACK) Populate the DB if you host your own db and the nest server already connected to it and created all the tables

1. While the server is STILL RUNNING, open `dummy.sql` in project root.
2. Use your postgresql db management tool or cli to execute all the lines in the file to populate the db;
3. Check your postgresql db management tool or cli to make sure the tables are populated

## Routes

| routes             | type | body                     | param                                                                              | response                                                                                                                                                                                                 |
| ------------------ | ---- | ------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /search/get        | GET  | none                     | `{ categoryId?: number; brandId?: number; colorName?:string; modelName?:string; }` | `productView[]`                                                                                                                                                                                          |
| /search/get-option | GET  | none                     | none                                                                               | `{ color: Record<string,string>, brand: Record<string,string>, category: Record<string,string>, }`                                                                                                       |
| /order/get         | GET  | none                     | none                                                                               | `orderView[]`                                                                                                                                                                                            |
| /order/create      | POST | `{ productId: number; }` | none                                                                               | `{ outOfStock: boolean }` if success, `{ outOfStock: boolean, reason: string }` with error code 409 if out of stock, and `{ errorId: number, reason: string }` with 404 if product cannot be found by id |
| /order/complete    | PUT  | `{ orderId: number; }`   | none                                                                               | `{ status: string }` if success, `{ status: string, reason: string }` with error code 409 if order is not opened, and `{ errorId: number, reason: string }` with 404 if order cannot be found by id      |
