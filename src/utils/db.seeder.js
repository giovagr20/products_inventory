const db = require("../configs/database.connection"); // Import your MySQL connection
const {
  createTableInventories,
  createProducts,
  createTableHistorics,
  createTableStores,
  createTableUsers,
} = require("./db.tables");

const {
  insertUsers,
  insertInventories,
  insertProducts,
  insertStores,
} = require("./db.dml");

exports.createTables = async () => {
  const connection = await db.getConnection();

  connection.query(createTableUsers);
  connection.query(createProducts, connection);
  connection.query(createTableStores, connection);
  connection.query(createTableInventories, connection);
  connection.query(createTableHistorics, connection);
  connection.release();
};

exports.seedDatabase = async () => {
  const connection = await db.getConnection();
  connection.query(insertUsers());
  connection.query(insertProducts());
  connection.query(insertStores());
  connection.query(insertInventories());

  connection.release();
};
