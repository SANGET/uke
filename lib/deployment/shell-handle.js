/**
 * Created by AlexZhang on 7/7/15.
 */
var sh = require('shelljs');

module.exports = function (projectDetail) {
  return new Promise(function (resolve, reject) {
    var shells = projectDetail.shells;
    for (var i = 0; i < shells.length; i++) {
      console.log(("Executing: " + shells[i]).yellow);
      try {
        sh.exec(shells[i]);
      } catch (err) {
        return reject(err);
      }
    }
    resolve(true);
  });
};