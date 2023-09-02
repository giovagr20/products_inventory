exports.insertUsers = () => {
  return `INSERT INTO users (name, picture) 
      VALUES ('John Smith', 'url<data:john>')`;
};

exports.insertProducts = () => {
    return `INSERT INTO products (name, description, state) 
    VALUES ('Product 1', 'Description of product 1', 1)`;
}

exports.insertStores = () => {
    return `INSERT INTO stores (name, id_user, state) 
    VALUES ('Store 1', 1, 1)`;
}

exports.insertInventories = () => {
    return `INSERT INTO inventories (id_store, id_product, quantity) 
    VALUES (1, 1, 7)`;
}

exports.insertHistorical = () => {
    //TODO:
}
