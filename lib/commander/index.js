/**
 * Created by AlexZhang on 7/7/15.
 */
var _config = require('../config.json');
var _port = _config.port;
var Commander = (function () {
  function Commander() {
    this.port = _port;
  }

  Commander.prototype.parse = function (processArgs) {
    this.processArgs = processArgs;
    var _processArgs = this.processArgs;

    var paramMarks = ['-port', '-path'];
    var paramMarksIndex = [];
    var targetParams = {};

    for (var i = 0; i < paramMarks.length; i++) {
      var _item = paramMarks[i];
      var _index = _processArgs.indexOf(_item);
      var _key = _item.replace('-', '');
      if (_index != -1 && !targetParams[_key]) {
        targetParams[_key] = _processArgs[_index + 1];
        paramMarksIndex.push(_processArgs.indexOf(_item));
      }
    }
    targetParams.path = targetParams.path || __dirname;
    if (!/\/$/.test(targetParams.path)) {
      targetParams.path += '/';
    }
    this.path = targetParams.path;
    this.port = targetParams.port || _port;
  };
  return Commander;
})();

module.exports = new Commander();
