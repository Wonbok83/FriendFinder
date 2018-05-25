var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

var PORT = 3333; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Listener, starts server 

app.listen(PORT, function(){
    console.log("PORT: "+ PORT);
})