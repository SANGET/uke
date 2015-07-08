/**
 * Created by AlexZhang on 7/7/15.
 */
var fs = require('fs');

var _config = require('../config.json');
var _configureSuffix = ".json";

module.exports = function (projectName, configPath) {
  return new Promise(function (resolve, reject) {
    var filePath = configPath + projectName + _configureSuffix;
    fs.readFile(filePath, function (err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(data));
    });
  });
};
