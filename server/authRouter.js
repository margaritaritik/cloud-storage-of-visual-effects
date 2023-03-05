const Router=require('express');
const router=new Router();
const controller=require('./authController');
const authMiddleware=require('./authMiddleware');
const multer = require("multer");

const upload = multer({ dest: 'images/' })

router.post('/registration',controller.registration);
router.post('/login',controller.login);
router.post('/uploadPhoto',controller.uploadPhoto);
router.post('/upload',upload.single('image'),controller.uploadUserPhoto);
router.get('/users',authMiddleware, controller.getUsers);

module.exports=router;

