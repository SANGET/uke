var childProcess = require('child_process');
var execA = childProcess.exec;
var execSync = childProcess.execSync;

module.exports = function() {
  return new Promise(function(resolve, reject) {
    execA("echo 'check permission'>__check.log", {
      cwd: "/"
    }, function(err, stdout, stderr) {
      if (!!stderr) return reject('Permission denied, please run by sudo.');
      execSync("rm __check.log", {
        cwd: "/"
      });
      resolve();
    });
  })
}
