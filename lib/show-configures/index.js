var sh = require('shelljs');

module.exports = function (configPath) {
  var configures = sh.ls(configPath + '*.json');
  console.log('所有配置文件: '.blue);
  configures.forEach(function (curr, index) {
    curr = curr.replace(/(\/\S+\/)/, '');
    console.log((index + 1 + ": " + curr).blue);
  });
};
