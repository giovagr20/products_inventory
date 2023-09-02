const { getStores, createStore } = require("../models/stores.model");

exports.getStores = async () => {
    return await getStores();
};

exports.createStore = async (store) => {
    return await createStore(store);
}
