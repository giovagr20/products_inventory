const dbConnection = require("../configs/database.connection");

exports.getStores = async () => {
  const connection = await dbConnection.getConnection();
  const [rows, fields] = await connection.query("SELECT * FROM stores ORDER BY name ASC");
  connection.release();
  return rows;
};

exports.createStore = async (store) => {
    const {
        name,
        idUser,
        state
    } = store;

    const connection = await dbConnection.getConnection();

    const [rows, fields] = await connection.query(`INSERT INTO stores
    (name, id_user, state) 
    VALUES (?, ?, ?)`, [
      name,
      idUser,
      state
    ], (errQuery, results) => {
      if (!errQuery) {
        console.log(`Data has been saved: ${results}`);
      }
      console.error(err);
    });

    connection.release();

    return fields;
}
