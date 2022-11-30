const express = require('express');

const messageController=require('../controller/message')
const userauthentication = require('../middleware/auth');

const router = express.Router();

router.post('/addMessage', userauthentication.authenticate, messageController.addMeassage)

module.exports=router;