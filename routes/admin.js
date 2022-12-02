const express = require('express');

const adminController=require('../controller/admin');

const router = express.Router();

router.post('/addMember/:id',  adminController.addMember);

router.post('/removeMember/:id',  adminController.removeMember);

router.post('/makeAdmin/:id',  adminController.makeAdmin);

router.post('/removeAdmin/:id',  adminController.removeAdmin);

module.exports=router;