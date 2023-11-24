const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    console.log("success")
    res.send("<h2>form successfuly  filled</h2>")
});
module.exports = router;