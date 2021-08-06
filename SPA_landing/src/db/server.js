const express = require('express');
const fs = require('fs');
const e = require("express");
const app = express();


app.use(express.json()); // Даем знать приложению, что работаем с json'ом

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
// const port = process.env.PORT || 5555;
const port = 5555; // чтобы не смущало process.env.PORT (если не стартует на 3000, то меняем на другой 8080 или 8888)
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});
