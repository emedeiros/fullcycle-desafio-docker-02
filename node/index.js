const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const db = require('./db.js');

app.get('/name', async (req, res) => {
    let name = req.query.name || null;
    const names = await db.dbSelect(name);
    res.send(names)
});

app.get('/', async (req, res) => {
    let name = req.query.name || "Estevao";
    let html = '<h1>Full Cycle</h1>';
    let listItems = "";

    const dbRecord = await db.dbSelect(name);
    const isNameInDb = ( dbRecord.length > 0);
 
    
    if (!isNameInDb) {
        console.log("Calling db.dbInsert()");
        await db.dbInsert(name);
    }
    
    const dbRecords = await db.dbSelect();   
    if (dbRecords !== undefined) {
        dbRecords.map(row => {
            listItems += `<li>${row.name}</li>`;
        });
        html += `<br /><h2>Lista de nomes cadastrada no banco de dados</h2><ul>${listItems}</ul>`;
    } else {
        html += `<br />Tabela People no banco de dados MySQL esta vazia ! Nao há dados a serem mostrados.`;
    }
    
    res.send(html);   
});

// Start the Express APP
app.listen(port, () => {
    console.log(`\nRodando Node Express APP na porta: ${port}`);
});