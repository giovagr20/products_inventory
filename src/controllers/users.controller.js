const { getUsers, getUserById } = require("../services/users.service");

exports.getUsers = async (req, res) => {
  const results = await getUsers();
  res.status(200).json({ results });
};

exports.getUserById = async (req, res) => {
  if (req.body === null) res.status(401).json({ error: "Send info complete" });

  const  id  = req.params.id;
  const results = await getUserById(id);

  res.status(200).json({ results });
};
