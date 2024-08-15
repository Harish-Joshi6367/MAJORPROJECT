const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../Controllers/listings.js");

const bodyParser = require('body-parser');
router.use(bodyParser.json());


//Index Route
router.get("/", wrapAsync(listingController.index));

//NEW ROUTE
router.get("/new", isLoggedIn, wrapAsync(listingController.newForm));

//create route
router.post("/", isLoggedIn, upload.single('listing[image]'), validateListing, 
     
    wrapAsync(listingController.createListing)
);


//SHOW ROUTE
router.get("/:id", wrapAsync(listingController.showListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

// update route
router.put("/:id", isLoggedIn, isOwner,
    upload.single('listing[image]'), 
    validateListing,
    wrapAsync(listingController.updateListing)
);

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;