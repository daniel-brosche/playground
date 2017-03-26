var express = require("express");
var app = express();
var fs = require("fs");
var sleep = require("sleep-async")();

function sleepAsync( timeout ) {
    return new Promise( resolve => {
        sleep.sleep( timeout, resolve );
    });
}

function readFileAsync( path, encoding ) {
    return new Promise( (resolve, reject) => {
        fs.readFile( path, encoding, (err, data) => err ? reject(err) : resolve( data ) );
    });
}

app.get("/list_users", async (req, res) => {
    try {
        data = await readFileAsync( __dirname + "/" + "users.json", "utf8"); 
        console.log(data);
        res.end(data);    
    } catch (error) {
        console.error(error);
        res.end(error.toString());
    }
});

app.get('/:id', async (req, res) => {
    try {
        data = await readFileAsync( __dirname + "/" + "users.json", "utf8"); 
        users = JSON.parse( data );
        var user = users["user" + req.params.id] 
        console.log( user );
        res.end( JSON.stringify(user));    
    } catch (error) {
        console.error(error);
        res.end(error.toString());
    }    
});

var server = app.listen( 8081, async () => {
   // await sleepAsync(3000);
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);         
});