/**
 * Created by AlexZhang on 7/7/15.
 */
var configReader = require('../configure-reader');
var shellsHandle = require('./shell-handle');

module.exports = function (projectName, configPath) {
  return new Promise(function (resolve, reject) {
    configReader(projectName, configPath)
        .then(shellsHandle)
        .then(done)
        .catch(errorHandle);

    function done(result) {
      resolve(result);
    }

    function errorHandle(err) {
      reject(err);
    }
  })
}
