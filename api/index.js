const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");

const jwt = require("jsonwebtoken");


const app = express();
const port = 4000;

const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb+srv://bradtech:PyQwI2sNYqR8edhW@cluster0.a4adwdw.mongodb.net/").then(() => {
    console.log("Connected To MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB");
} )


app.listen(port, () => {
    console.log('Server running on 4000');
})


const User = require("./models/user");

app.post("/register", async(req,res) => {
    try {
        const userData = req.body;

        const newUser = new User(userData);

        await newUser.save();

        const secretKey = crypto.randomBytes(32).toString("hex");

        const token  = jwt.sign({userId:newUser._id,secretKey})

        res.status(200).json({token});

        
    } catch (error) {
        console.log("Error Creating User", error);
        res.status(500).json({error:"Internal Server Error"});
    }
})