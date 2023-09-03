const express = require("express");
const app = express();
const productsRoute = require("./routes/products.route");
const storesRoute = require("./routes/stores.route");
const usersRoute = require("./routes/users.route");
const inventoriesRoute = require('./routes/inventories.route');
const { seedDatabase, createTables } = require("./utils/db.seeder");

const API = "/api";
const PORT = process.env.PORT || 3000;

Promise.resolve(createTables())
  .then(() => seedDatabase())
  .catch((err) => console.log(err));


//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(API, productsRoute);
app.use(API, storesRoute);
app.use(API, usersRoute);
app.use(API, inventoriesRoute)


app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
