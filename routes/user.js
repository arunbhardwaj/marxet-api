const express = require("express");
const router = express.Router();
const { User } = require("../models");

// GET ALL
router.get("/", async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

// GET by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.json(user);
});

router.post(`/favorites/:listing_id`, async (req, res) => {
  const { user_id } = req.body;
  const { listing_id } = req.params;
  const user = await User.findById(user_id);
  User.favorites.push(listing_id);
  const save = await user.save();
  return res.json(user);
});

// POST, won't work until we get firebase/auth0 user id's
router.post("/", async (req, res) => {
  const { id, username } = req.body;
  const user = await User.create({ _id: id, username });
  return res.status(201).json(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, wishlist, watchlist } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { username, wishlist, watchlist },
    {
      new: true,
    }
  );
  return res.json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id); // can be null but not necessary
  return res.send(`user ${id} deleted`);
});

module.exports = router;
