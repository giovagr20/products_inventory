exports.createTableUsers = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        picture VARCHAR(255),
        state TINYINT(1),
        createBy INT(11),
        updateBy INT(11),
        createAt TIMESTAMP,
        updatedAt TIMESTAMP,
        deletedAt TIMESTAMP
      )`;

exports.createTableStores = `CREATE TABLE IF NOT EXISTS stores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        id_user INT(11),
        FOREIGN KEY (id_user) REFERENCES users(id),
        state TINYINT(1),
        createBy INT(11),
        updateBy INT(11),
        createAt TIMESTAMP,
        updatedAt TIMESTAMP,
        deletedAt TIMESTAMP
        )`;

exports.createProducts = `CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        description varchar(200),
        state TINYINT(1),
        createBy INT(11),
        updateBy INT(11),
        createAt TIMESTAMP,
        updatedAt TIMESTAMP,
        deletedAt TIMESTAMP
        )`;

exports.createTableInventories = `CREATE TABLE IF NOT EXISTS inventories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_store INT(11),
        FOREIGN KEY (id_store) REFERENCES stores(id),
        id_product INT(11),
        FOREIGN KEY (id_product) REFERENCES products(id),
        quantity INT(11),
        createBy INT(11),
        updateBy INT(11),
        createAt TIMESTAMP,
        updatedAt TIMESTAMP,
        deletedAt TIMESTAMP
        )`;

exports.createTableHistorics = `CREATE TABLE IF NOT EXISTS historics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_store_source INT(11),
        FOREIGN KEY (id_store_source) REFERENCES stores(id),
        id_store_target INT(11),
        FOREIGN KEY (id_store_target) REFERENCES stores(id),
        id_inventory INT(11),
        FOREIGN KEY (id_inventory) REFERENCES inventories(id),
        quantity INT(11),
        createBy INT(11),
        updateBy INT(11),
        createAt TIMESTAMP,
        updatedAt TIMESTAMP,
        deletedAt TIMESTAMP
        )`;
