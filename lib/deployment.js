var childProcess = require('child_process');
var execFile = childProcess.execFile;

module.exports = function(projectName, configPath) {
  return new Promise(function(resolve, reject) {
    execFile(configPath + projectName + ".sh", {
      cwd: configPath
    }, function(err, stdout, stderr) {
      if (err) {
        console.log(err)
        reject(err);
      }
      console.log(stdout.toString())
      resolve(true);
    })
  })
}
