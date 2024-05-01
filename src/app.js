const express = require("express");
const path = require("path");
require("./db/conn");

const Customer = require("./models/custDetail");
const Vender = require("./models/vendDetail");

const hbs = require("hbs");
const { registerPartials } = require("hbs");

const app = express();
const port = process.env.PORT || 3000;


// Setting the path 
const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");


// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatespath);
hbs.registerPartials(partialspath);

//routing
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/custOrd", (req, res) => {
    res.render("custOrd");
})

app.get("/choose", (req, res) => {
    res.render("choose");
})

app.get("/custLogin", (req, res) => {
    res.render("custLogin");
})

app.get("/custSignUp", (req, res) => {
    res.render("custSignUp");
})

app.get("/custSubs", (req, res) => {
    res.render("custSubs");
})

app.get("/vendLogin", (req, res) => {
    res.render("vendLogin");
})

app.get("/vendMenu", (req, res) => {
    res.render("vendMenu");
})

app.get("/vendSignUp", (req, res) => {
    res.render("vendSignUp");
})

app.get("/vendMain", (req, res) => {
    res.render("vendMain");
})

app.get("/custMain", (req, res) => {
    res.render("custMain");
})


app.get("/vendSubs", (req, res) => {
    res.render("vendSubs");
})

app.get("/vendWallet", (req, res) => {
    res.render("vendWallet");
})

app.get("/vendTodaysOrd", (req, res) => {
    res.render("vendTodaysOrd");
})

app.get("/vendDailyOrd", (req, res) => {
    res.render("vendDailyOrd");
})





// Customer Sign up

app.post(("/custLogin"), async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new Customer(req.body);
        await userData.save();
        res.status(201).render("custLogin");
    } catch (error) {
        res.status(500).send(error);
    }
})


// cust login
app.post(("/custMain"), async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const usermail = await Customer.findOne({ email: email });
        if (usermail.password === password) {
            res.status(201).render("custMain");
        } else {
            res.send("Wrong details");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

// vend Sign up
app.post(("/vendLogin"), async (req, res) => {
    try {
        // res.send(req.body);
        const vendData = new Vender(req.body);
        await vendData.save();
        res.status(201).render("vendLogin");  
       
    } catch (error) {
        res.status(500).send(error);
    }
})


// vend Login 
app.post(("/vendMain"), async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;

        const vendmail = await Vender.findOne({ email: email });
        if (vendmail.password === password) {
            res.status(201).render("vendMain");
        } else {
            res.send("Wrong details");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});


//server create
app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
})





