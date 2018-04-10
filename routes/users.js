const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/:param',(req, res, next)=> {
  res.send('get user with id: '+req.params.param);
});

router.post('/', (req,res,next)=>{

})


module.exports = router;
