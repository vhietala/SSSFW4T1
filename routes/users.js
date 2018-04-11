const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('list of users');
});

router.get('/:param', (req, res, next) => {
  res.send('get user with id: ' + req.params.param);
});

router.post('/', (req, res, next) => {
  res.send('Insert user');
});

router.post('/:param', (req, res, next) => {
  res.send('Insert user with Id: ' + req.params.param);
});

router.put('/:param', (req, res, next) => {
  res.send('Update User with Id: ' + req.params.param);
});

router.delete('/:param', (req, res, next) => {
  res.send('deleted user with id: ' + req.params.param);
});

module.exports = router;
