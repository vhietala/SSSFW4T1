'use strict';
const express = require('express');
const router = express.Router();
const moment = require('moment');
const cookieParser = require('cookie-parser');
const url = require('url');
const useragent = require('express-useragent');

router.use(cookieParser());
const myLogger = function(req, res, next) {
  console.log('LOGGED');
  next();
};

router.use(myLogger);
moment().locale('fi');

/* GET home page. */
router.get('/', function(req, res, next) {
  const queryparams = req.query;
  console.log('Time: ' + moment(Date.now()).format());
  console.log('Path: ' + req.path);
  const ip = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
  console.log('IP: ' ) + req.connection.remoteAddress;
  console.log('browser: ' + ip);
  res.render('index', {title: 'Express'});
});

module.exports = router;
