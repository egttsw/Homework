const User = require("../models/User");

const router = require("express").Router();

// Update user
router.put("/:id", async (req, res) => {
    if (req.body.confirmed) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You need to be signed in to update the user!");
    }
  });

// Delete a user
router.delete("/:id", async (req, res) => {
    if (req.body.confirmed) {
        try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You need to be signed in to delete the user!");
    }
  });

// View the user details
router.get("/:id", async (req, res) => {
    if(req.body.confirmed){
        try {
            const user = await User.findById(req.params.id);
            const {password, email, username, ... other} = user._doc;  // How to get date only?
            res.status(200).json(user);   
        } catch (err) {
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You need to be signed in to see the user details!");
    }
});

// View the user list
router.get('/usersList', async (req, res) => {
    if(req.body.confirmed){
        try{
        const user = await User.find({}, async (err, users) => {
        let userMap = {};
    
        users.forEach(async (user) => {
            userMap[user._id] = user;
        });
    
        return res.status(200).json(userMap); 
        });
        } catch (err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You need to be signed in to see the user list!");
    }
});

module.exports = router;