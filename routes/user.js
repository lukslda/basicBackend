
const { Router } = require('express');
const { 
    getUser, 
    putUser, 
    deleteUser, 
    postUser 
} = require('../controllers/user');

const router = Router();

router.get('/', getUser);
router.put('/:id', putUser);
router.post('/', postUser);
router.delete('/:id', deleteUser);

module.exports = router;