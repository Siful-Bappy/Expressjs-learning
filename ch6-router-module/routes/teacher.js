const express = require('express');
const router = express.Router();

router.get("/all", (req, res) => {
    res.send("All Teacher")
})
router.post("/all", (req, res) => {
    res.send("New teacher created")
})
router.put("/all", (req, res) => {
    res.send("Teacher update")
})
router.delete("/all", (req, res) => {
    res.send("Teacher delete")
})

module.exports = router