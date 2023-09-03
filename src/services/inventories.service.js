const { createInventory } = require('../models/inventories.model');

exports.createInventory = async (inventory) => {
    return await createInventory(inventory);
}