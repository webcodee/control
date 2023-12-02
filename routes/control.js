const Control = require("../models/Control");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
  const newControl = new Control(req.body);

  try {
    const savedControl = await newControl.save();
    res.status(200).json(savedControl);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedControl = await Control.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedControl);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Control.findByIdAndDelete(req.params.id);
    res.status(200).json("Control has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CONTROL
router.get("/find/:id", async (req, res) => {
  try {
    const control = await Control.findById(req.params.id);
    res.status(200).json(control);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CONTROLS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let control;
    if (qNew) {
      control = await Control.find().sort({ createdAt: -1 }).limit(5);
    } else {
      control = await Control.find();
    }
    res.status(200).json(control);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;