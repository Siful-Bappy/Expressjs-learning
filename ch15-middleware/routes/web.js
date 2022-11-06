import express from 'express'
import { homeController } from '../controllers/aboutController.js';
import { aboutController } from '../controllers/homeController.js';
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;