const express = require('express');

const messageController=require('../controller/message')
const userauthentication = require('../middleware/auth');

const router = express.Router();

router.post('/addMessage/:id', userauthentication.authenticate, messageController.addMeassage);

router.get('/getMessage/:id', userauthentication.authenticate, messageController.getMeassage)

module.exports=router;