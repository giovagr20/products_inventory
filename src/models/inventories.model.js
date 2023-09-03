const dbConnection = require("../configs/database.connection");
const moment = require('moment');

exports.createInventoriesByDefault = async (idProduct) => {
  const connection = await dbConnection.getConnection();

  const [rows, fields] =
    await connection.query(`SELECT id, id_store, id_product, quantity 
    FROM inventories 
    WHERE inventories.id_product = ${idProduct}`);

  console.log(`This is the rows ${rows}`);

  if (!rows || rows.length == 0) {
    console.log("Here am i");
    await connection.query(
      `INSERT INTO inventories (id_product, id_store, quantity)
    VALUES (?, ?, ?)`,
      [idProduct, 1, 8]
    );
  }
  connection.release();
};

exports.createInventory = async (inventory) => {
  const connection = await dbConnection.getConnection();

  const userCreated = 1;
  const userUpdated = 2;
  const { idProduct, idStore, quantity } = inventory;
  const mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:MM:SS');

  const [rows, fields] =
    await connection.query(`SELECT id, id_store, id_product, quantity 
    FROM inventories 
    WHERE inventories.id_product = ${idProduct} AND
    inventories.id_store = ${idStore} AND 
    inventories.quantity = ${quantity}`);

  if (!rows || rows.length === 0) {
    await connection.query(
      `INSERT INTO inventories (id_product, id_store, quantity, createBy, createAt)
    VALUES (?, ?, ?, ?, ?)`,
      [idProduct, idStore, quantity, userCreated, mysqlTimestamp]
    );

    return true;
  } else {
    await connection.query(
      `UPDATE inventories 
      SET inventories.id_store = ${idStore},
      inventories.id_product = ${idProduct},
      inventories.quantity = ${quantity},
      inventories.updateBy = ${userUpdated},
      inventories.updatedAt = ${mysqlTimestamp}`
    );

    return true;
  }
};
