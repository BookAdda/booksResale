var connection = require('../db.js');

connection.query(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        uname VARCHAR(50) NOT NULL,
        email VARCHAR(20) NOT NULL,
        password VARCHAR(10) NOT NULL,
        college VARCHAR(50) NOT NULL,
        address VARCHAR(60),
        contact BIGINT NOT NULL
    );`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
//        connection.close();
    }
)


connection.query(
    `CREATE TABLE IF NOT EXISTS books (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        userid INTEGER NOT NULL,
        bname VARCHAR(50) NOT NULL,
        author VARCHAR(50) NOT NULL,
        image LONGTEXT NOT NULL,
        price INTEGER NOT NULL,
        cndition VARCHAR(20) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id)
    );`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
//        connection.close();
    }
)

// connection.query(
//     `CREATE TABLE IF NOT EXISTS listings (
//         itemid INTEGER AUTO_INCREMENT PRIMARY KEY,
//         userid INTEGER NOT NULL,
//         bookid INTEGER NOT NULL,
//         FOREIGN KEY (userid) REFERENCES users(id),
//         FOREIGN KEY (bookid) REFERENCES books(id)
//     );`,
//     function(err, results) {
//         if (err) {
//             console.error(err)
//         } else {
//             console.log("Table created successfully")
//         }
// //        connection.close();
//     }
// )

connection.query(
    `CREATE TABLE IF NOT EXISTS wishlist (
        wishid INTEGER AUTO_INCREMENT PRIMARY KEY,
        userid INTEGER NOT NULL,
        bookid INTEGER NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id),
        FOREIGN KEY (bookid) REFERENCES books(id)
    );`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
//        connection.close();
    }
)

connection.query(
    `CREATE TABLE IF NOT EXISTS messages (
        msgid INTEGER AUTO_INCREMENT PRIMARY KEY,
        senderid INTEGER NOT NULL,
        receiverid INTEGER NOT NULL,
        bookid INTEGER NOT NULL,
        msg VARCHAR(200) NOT NULL,
        FOREIGN KEY (senderid) REFERENCES users(id),
        FOREIGN KEY (receiverid) REFERENCES users(id),
        FOREIGN KEY (bookid) REFERENCES books(id)
    );`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
//        connection.close();
    }
)
