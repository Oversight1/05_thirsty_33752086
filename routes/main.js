// routes/main.js
const express = require("express");
const router = express.Router();

// CENTRALIZED DATA
const shopData = {
    shopName: "The Thirsty Student",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    // Extension Task 10: The Shop Locations
    shopLocations: [
        { location: "New Cross", manager: "Steve Smith", email: "steve@thirsty.com" },
        { location: "Lewisham", manager: "Jane Doe", email: "jane@thirsty.com" },
        { location: "Peckham", manager: "Chris Evans", email: "chris@thirsty.com" }
    ]
};

// Route: Home Page 
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

// Route: About Page 
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

// Route: Search Page
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

// Route: Register Page
router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

// Route: Survey Page (Extension Task 11)
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

// --- FORM HANDLING ROUTES ---

// Handle Search (GET) [cite: 259]
router.get("/search_result", (req, res) => {
    let keyword = req.query.search_text;
    res.send(`You searched for: ${keyword}`);
});

// Handle Register (POST) [cite: 311]
router.post("/registered", (req, res) => {
    // Task 8: Basic backend validation
    // (Ideally, handle this with a nicer response page, but simple text is required)
    res.send(`Hello ${req.body.first} ${req.body.last}, you are now registered! We will send an email to ${req.body.email}`);
});

// Handle Survey (POST) (Extension Task 11)
router.post("/survey_result", (req, res) => {
    // Render a nice page instead of raw JSON
    res.render("survey_result.ejs", { 
        shopName: shopData.shopName, 
        data: req.body 
    });
});

module.exports = router;