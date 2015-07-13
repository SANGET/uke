var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

module.exports = function() {
  return new Promise(function(resolve, reject) {
    exec("echo 'check permission'>__check.log", {
      cwd: "/"
    }, function(err, stdout, stderr) {
      if (!!stderr) return reject('Permission denied, please run by sudo.');
      execSync("rm __check.log", {
        cwd: "/System/"
      });
      resolve();
    });
  })
}
