import express from 'express'
import userController from '../controllers/userController.js'
const router = express.Router()

router.get("/", userController.home);
router.get("/registration", userController.registration);
router.post("/registration", userController.createUserDoc);
router.get("/login", userController.login);
router.post("/login", userController.verifyLogin);

export default router;