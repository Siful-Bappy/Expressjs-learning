import express from 'express';
import { aboutController } from '../constrollers/aboutController.js';
import { homeController } from '../constrollers/homeController.js';
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;