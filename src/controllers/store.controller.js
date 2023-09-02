const { getStores, createStore } = require("../services/stores.service");

exports.getStores = async (req, res, next) => {
  const results = await getStores();
  res.status(200).json({ results });
};

exports.createStore = async (req, res) => {
    if (req.body === null) 
        res.status(400).json({error: "Send complete info"})

    const results = await createStore(req.body);  
    res.status(201).json({results})
}
