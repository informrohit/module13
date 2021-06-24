'use strict'

const  express = require("express");

require("./db");

var routes = require('./api/routes/AuthorBookRoutes'); //importing route

// create express app
const  app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/job",require('./api/routes/cronejob'))
// define port to run express app
const  port = process.env.PORT || 3000;
routes(app);


// Add endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
    });
    
    // Listen to server
    app.listen(port, () => {
    
    console.log(`Server running at http://localhost:${port}`);
    });

