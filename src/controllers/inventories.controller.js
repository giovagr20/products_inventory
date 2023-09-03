const { createInventory } = require('../services/inventories.service')


exports.createInventory = async (req, res) => {
    if (req.body == null) res.status(401).json({error: "please send info complete"});

    await !createInventory(req.body) ? 
    res.status(500).json({info: "Could not create inventory"}) :
    res.status(201).json({info: "Saved correctly"});
}