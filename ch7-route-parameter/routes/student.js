import express from 'express';
const router = express.Router();

// All student routes
router.get("/all/:id", (req, res) => {
    res.send("All student is here")
    const id = req.params.id;
    res.send(`All student is here ${id}`)
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
// module.exports = router
export default router