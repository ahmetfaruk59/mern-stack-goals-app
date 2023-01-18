import express from 'express';
import { getMe, loginUser, registerUser } from '../controllers/userController.js';
import protect from '../middlewares/authMiddleware.js';

const router =express.Router();

router.post('/',registerUser);
router.post('/login',loginUser);
router.get('/:id',protect,getMe);

export default router;