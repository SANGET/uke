/**
 * Created by AlexZhang on 7/7/15.
 */
var express = require('express');
var bodyPares = require('body-parser');

var colors = require('colors');

var showConfigures = require('./configPrinter');
var checkPer = require('./checkPermission');
var program = require('./commander');

checkPer()
  .then(init)
  .catch(function(reason) {
    console.log(reason.red);
    process.exit();
  })

function init() {
  var deployment = require('./deployment');

  var app = express();

  program.parse(process.argv);

  app.use(bodyPares.json());
  app.use(bodyPares.urlencoded({
    extended: false
  }));

  app.post('/:id', function(req, res, next) {
    var projectName = req.params.id;
    deployment(projectName, program.path)
      .then(done)
      .catch(errorHandel);

    function done() {
      console.log('Done!'.green);
      res.send('Done!');
    }

    function errorHandel() {
      console.error(("ErrorHandle: " + err).red);
      res.sendStatus(500);
    }
  });
  showConfigures(program.path);

  var server = app.listen(program.port, function() {
    var host = server.address().address;
    var port = server.address().port;
    return console.log(("App listening at http://" + host + ":" + port).green);
  });
}
