const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });
const fetchUser = require("../middleware/fetchUser");
const Favourite = require("../modals/Favourite");

router.post("/addfav", fetchUser, async (req, res) => {
  try {
    const { favourite } = req.body;
    const fav = new Favourite({
      favourite,
      user: req.user.id,
    });
    const savedFavs = await fav.save();
    res.json(savedFavs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
});


router.put("/updatefav/:id", fetchUser, async (req, res) => {
  try {
    const { favourite } = req.body;

    let fav = await Favourite.findById(req.params.id);
    if (!fav) {
      return res.status(404).send("Not found");
    }
    if (fav.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    fav = await Favourite.findByIdAndUpdate(
      req.params.id,
      { $pull: {favourite} },
      { new: true }
    );
    res.json(fav);

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some Error Occured");
  }
});
module.exports = router;
