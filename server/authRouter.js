const Router=require('express');
const router=new Router();
const controller=require('./authController');
 const authMiddleware=require('./authMiddleware');

router.post('/registration',controller.registration);
router.post('/login',controller.login);
router.post('/uploadPhoto',authMiddleware,controller.uploadPhoto);
router.get('/users',authMiddleware, controller.getUsers);

module.exports=router;

