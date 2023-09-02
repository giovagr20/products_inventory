const dbConnection = require("../configs/database.connection");

exports.createInventoriesByDefault = async (idProduct) => {
  const connection = await dbConnection.getConnection();

  const [rows, fields] =
    await connection.query(`SELECT id, id_store, id_product, quantity 
    FROM inventories 
    WHERE inventories.id_product = ${idProduct}`);

  console.log(`This is the rows ${rows}`);

  if (!rows || rows.length == 0) {
    console.log('Here am i')
    await connection.query(`INSERT INTO inventories (id_product, id_store, quantity)
    VALUES (?, ?, ?)`, [idProduct, 1, 8]) 
  }
  connection.release();
};
