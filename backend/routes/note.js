const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        name: "Dhars",
        number: 2
    }
    res.json(obj)
})
module.exports = router;