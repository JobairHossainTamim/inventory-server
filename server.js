const express = require("express");
const app = express();
const DbConnection =require("./DbConnection");
const cors=require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');


// Port 
const PORT = process.env.PORT || 5000;



// Middle wire

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));
app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.json())




// Router
const itemRoute=require('./routes/itemsRoute');
const userRoute=require('./routes/userRoute');
const billsRoute=require('./routes/billsRoute');



// // Route
app.use('/api/items/', itemRoute);
app.use('/api/users/' ,userRoute)
app.use('/api/bills/' ,billsRoute)




app.get('/', (req, res) => res.send("hello node js"))



app.listen(PORT, () => { console.log("Port Running") });