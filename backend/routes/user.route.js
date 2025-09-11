import express from 'express';
import { login, register } from '../controllers/user.controller.js';
import { logout } from '../controllers/user.controller.js';

const router = express.Router();

// Sample route
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);


export default router;