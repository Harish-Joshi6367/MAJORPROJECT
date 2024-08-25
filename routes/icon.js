const express = require("express");
const Listing = require("../models/listing.js");
const router = express.Router();

router.get("/trending", async (req, res) => {
    let allListing = await Listing.find({category: 'Trending'});
    res.render("./listings/index.ejs", {allListing});
})

router.get("/mountain", async (req, res) => {
    let allListing = await Listing.find({category: 'Mountain'});
    res.render("./listings/index.ejs", {allListing});
})

router.get("/iconicCity", async (req, res) => {
    let allListing = await Listing.find({category: 'IconicCity'});
    res.render("./listings/index.ejs", {allListing});
})

router.get("/pools", async (req, res) => {
    let allListing = await Listing.find({category: 'Pools'});
    res.render("./listings/index.ejs", {allListing});
})

router.get("/camping", async (req, res) => {
    let allListing = await Listing.find({category: 'Camping'});
    res.render("./listings/index.ejs", {allListing});
})

router.get("/farms", async (req, res) => {
    let allListing = await Listing.find({category: 'Farm'});
    res.render("./listings/index.ejs", {allListing});
})

module.exports = router;