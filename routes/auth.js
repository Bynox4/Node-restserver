
import { Router } from 'express';
import { check } from 'express-validator';

import { login } from '../controllers/auth.js';
import { validateFields } from '../middlewares/index.js';


const router = Router();


router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    validateFields
], login );

export default router;