// import mysql from 'mysql2'
const mysql = require('mysql2');

// MYSQL
const config = {
    host: 'db',
    user: 'user01',
    password: 'abc123',
    database: 'nodedb',
};

const pool = mysql.createPool(config).promise()

const dbSelect = async (name) => {
    const connection = mysql.createConnection(config);
    let sql = `SELECT * FROM people`;

    if (typeof name === 'string' && name !== '') {
        sql += ` WHERE name = "${name}"`;
    }
    sql += ";"


    const [rows] = await pool.query(sql);

    console.log(sql)
    console.log(rows);

    return rows;
};

const dbInsert = async (name) => {
    const sql = `INSERT INTO people(name) values('${name}');`;
    const [result] = await pool.query(sql)
    return result
}


module.exports = {dbSelect, dbInsert};