import express from 'express';
import { aboutController } from '../controller/aboutController.js';
import { homeController } from '../controller/homeController.js';
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;