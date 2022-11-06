import express from 'express'
import { studentController } from '../controllers/studentController.js';
const router = express.Router();
import myLogger from "../middleware/logger-middleware.js"

// Router level middleware
router.use(myLogger);
router.get("/student", studentController);

export default router;