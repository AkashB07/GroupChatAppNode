const express = require('express');

const groupController=require('../controller/group')
const userauthentication = require('../middleware/auth');

const router = express.Router();

router.post('/createGroup', userauthentication.authenticate, groupController.createGroup);

router.get('/getGroups', userauthentication.authenticate, groupController.getGroups);

router.get('/getMembers/:id', userauthentication.authenticate, groupController.getMembers);

router.get('/getAllUsers', groupController.getAllUsers);

module.exports=router;