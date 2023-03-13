# InventoryManagementSystem
The project manages multiple book stores and notifies if any book is out of stock.

The project uses NodeJs, Knex, PostgreSQL, and Express technologies.

The folowing is the folder structure used:

data\
----migrations

----seeds

src\
----routes

----services

The data directory conatins migration and seed files. The src folder contains routes and service files. In order to run this project, follow the following steps:
Type the following commands in the root directory in the terminal
1. npm run migrate
2. npm run seed
3. npm start

The first step creates database and respective tables. The second step populates the tables. The third step starts the project.
