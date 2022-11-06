import express from 'express';
import { homeController } from '../controller/homeController.js';
const router = express.Router();

router.get("/", homeController);

export default router;