const express = require('express');

const adminController=require('../controller/admin');

const userauthentication = require('../middleware/auth');

const router = express.Router();

router.post('/addMember/:id', userauthentication.authenticate, adminController.addMember);

router.post('/removeMember/:id', userauthentication.authenticate, adminController.removeMember);

router.post('/makeAdmin/:id', userauthentication.authenticate, adminController.makeAdmin);

router.post('/removeAdmin/:id', userauthentication.authenticate, adminController.removeAdmin);

module.exports=router;