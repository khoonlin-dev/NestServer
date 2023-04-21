# Introduction

This is a server written using nest-js and typeorm, working on postgresql database.

## Setup

1. You have to host your own postgresql database.
2. Create a new database named "shop"
3. Do not add anything to it for now. **MAKE SURE IT IS A CLEAN DB**
4. Open the sample .env
5. Add your host to `DB_HOST`, port to `DB_PORT`, user name and password (for testing purpose only. the credentials should be stored elsewhere) to `DB_USERNAME` and `DB_PASSWORD`.
6. Run `yarn install` and `yarn run start:dev`. The server will start syncing with the Db
7. If there is error, make sure your user have enough permission to create public schemas and try again.
8. If there is no error, check your postgresql db management tool or cli to make sure there are at least **SEVEN** tables and **TWO** views

## Populate the DB

1. While the server is STILL RUNNING, open `dummy.sql` in project root.
2. Use your postgresql db management tool or cli to execute all the lines in the file to populate the db;
3. Check your postgresql db management tool or cli to make sure the tables are populated

## Routes

| routes             | type | body                     | param                                                                              | response                                                                                           |
| ------------------ | ---- | ------------------------ | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| /search/get        | GET  | none                     | `{ categoryId?: number; brandId?: number; colorName?:string; modelName?:string; }` | `productView[]`                                                                                    |
| /search/get-option | GET  | none                     | none                                                                               | `{ color: Record<string,string>, brand: Record<string,string>, category: Record<string,string>, }` |
| /order/get         | GET  | none                     | none                                                                               | `orderView[]`                                                                                      |
| /order/create      | POST | `{ productId: number; }` | none                                                                               | none                                                                                               |
| /order/complete    | POST | `{ orderId: number; }`   | none                                                                               | none                                                                                               |
