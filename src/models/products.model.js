const dbConnection = require("../configs/database.connection");
const { createInventoriesByDefault } = require("./inventories.model");

exports.createProduct = async (product) => {
  const { name, description, state } = product;

  const connection = await dbConnection.getConnection();

  const [rows, fields] = await connection.query(
    `INSERT INTO products
  (name, description, state) 
  VALUES (?, ?, ?)`,
    [name, description, state],
    (errQuery, results) => {
      if (!errQuery) {
        console.log(`Data has been saved: ${results}`);
      }
      console.error(err);
    }
  );

  createInventoriesByDefault(rows.insertId);

  return rows;
};

exports.getProducts = async () => {
  const connection = await dbConnection.getConnection();

  const [rows, fields] = await connection.query(`SELECT products.name, 
  SUM(inventories.quantity) AS Total
  FROM products
  LEFT JOIN inventories ON products.id = inventories.id_product
  GROUP BY products.name
  ORDER BY Total DESC`);

  connection.release();

  return rows;
};
