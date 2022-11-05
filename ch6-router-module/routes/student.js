const express = require('express');
const router = express.Router();

// All student routes
router.get("/all", (req, res) => {
    res.send("All student is here")
})
router.post("/all", (req, res) => {
    res.send("New student created")
})
router.put("/all", (req, res) => {
    res.send("student update")
})
router.delete("/all", (req, res) => {
    res.send("student delete")
})

// old
module.exports = router

// new
// export default router