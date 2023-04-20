const express = require("express");
const User = require("../modals/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("name", "Name must be atleast 3 characters long").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let user = User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({error:"Sorry user with this email already exists"})
    }
    user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
  }
);

module.exports = router;
