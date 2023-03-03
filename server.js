const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
let Toy = require('./models/toys.js')

const cors = require("cors")

const app = express()

// Used to server our public folder
app.use(express.static('public'));

// parse req.body for use
app.use(express.json());

// parse queries from url
app.use(express.urlencoded({extended: true}))
app.use(cors())
console.log(process.env.MONGOUSERNAME)
const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.uxrtp52.mongodb.net/Mod2Project?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
// connect to our MongoDB database (our Models specify which collections)
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// function will activate once to let us know we are connected
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Create toy- uses information from req.body to make a new product in your collection
app.post('/create_toy', async (req, res) =>{
    const {name, price, content, inventory, image} = req.body;

    // Model methods usually give us a promise, so we can wait for the response
    let returnedValue = await Toy.create({
        name,
        price,
        content,
        inventory,
        image
    });
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);

})

// Get products- responds with all products in your collection
app.get('/get_toy_data', async (req, res) => {
    // get data from database
    let response = await Toy.find({});
    console.log(response);
    // send it back to front end
    res.json(response)

})

// Get a specific product- responds with one specific product from your collection
app.get("/getspecifictoy/:product_id", async (req, res) => {
    console.log("get specific toy route");

    res.json(response);
  })

// Delete product- The product ID should be included in the URL as a query
app.delete("/delete_toy_data/:idOfToy", async (req, res) => {
    console.log("routehit")
    let {idOfToy} = req.params
    console.log(idOfToy)
    let response = await Toy.findByIdAndDelete(idOfToy);
 
    console.log(response);
 
    res.send({data: `deleted ${response.deletedCount} items.`})
 })

 // Update product- uses information from req.body to update the specific product
 app.put('/update_by_id', async (req, res) => {
    let id = '63fd3aab97be4eaf38b8cfd7';
    // usually from the front end (req.body.theId) // req.body.params.id // req.query.fruitId
    // update data comes from req.body {name: "banana", readyToEat: false, color: green}
    let myData = {price: 50}
    let response = await Toy.findByIdAndUpdate(id, myData, {new:true});
    console.log(response);
    res.send(response);
})

// Get single toy using id
app.get('/get_single_toy_using_id/:idOfToy', async (req, res) => {
    let id = req.params.idOfToy;

    let response = await Toy.findById(id);
    console.log(response);
    res.send(response);
})

// Update a single toy
app.put('/update_one_toy/:id', async (req, res) => {
    let id = req.params.id;
    let myData = req.body;

    let response = await Toy.findByIdAndUpdate(id, myData);
    console.log(response);
    res.send(response);
})


app.listen(5000, () => {
    console.log(`Server is listening on 5000`)
})