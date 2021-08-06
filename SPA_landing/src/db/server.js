const express = require('express');
const fs = require('fs');
const e = require("express");
const app = express();


app.use(express.json()); // json

app.get('/', function(req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    fs.readFile('pf.json',(err, data)=>{
        if(err){
            console.log('ne nashel file')
        } else {
            res.send(JSON.parse(data))
        }
    })
})

/**
 * Запуск сервера
 * @type {string|number}
 */

const port = 5555;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});
