var childProcess = require('child_process');
var execSync = childProcess.execSync;

module.exports = function(configPath) {
  var ExecOptions = function() {
    return {
      cwd: configPath
    }
  };
  var pwd = execSync("pwd", new ExecOptions());
  console.log(("Executing path: " + pwd.toString()).green)
  console.log('All of congifurations: '.blue);
  var configLs = execSync('ls', new ExecOptions());
  console.log(configLs.toString().yellow)
};
