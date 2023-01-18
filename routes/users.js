import { Router } from 'express';
import { check, query } from 'express-validator';

import { emailExist, existUserId, rolValid } from '../helpers/db-validators.js';
import validateFields from '../middlewares/validate-fields.js';

import { usersDelete, usersGet, usersPatch, usersPost, usersPut } from '../controllers/users.js';

const router = Router();


router.get('/',[
    query("from", "From has to be a number").isNumeric().optional(),
    query("limit", "Limit has to be a number").isNumeric().optional(),
    validateFields,
], usersGet );

router.put('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom( existUserId ),
    check('rol').custom( rolValid ),
    validateFields,
], usersPut );

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password must be longer than 6 characters').isLength({ min: 6 }),
    check('email', 'Invalid email').isEmail(),
    check('email').custom( emailExist ),
    // check('rol', 'Invalid rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( rolValid ), 
    validateFields 
], usersPost );

router.delete('/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom( existUserId ),
    validateFields
], usersDelete );

router.patch('/', usersPatch );




export default router;