const dbConnection = require("../configs/database.connection");

exports.getUsers = async () => {
  const connection = await dbConnection.getConnection();
  const [rows, fields] = await connection.query(`SELECT * FROM users`);

  connection.release();

  return rows;
};

exports.getUserById = async (id) => {
  const connection = await dbConnection.getConnection();
  const [rows, fields] = await connection.query(`SELECT * FROM users
    WHERE users.id = ${id}`);

  connection.release();

  return rows;
};
