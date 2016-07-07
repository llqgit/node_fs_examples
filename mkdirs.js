fs = require('fs');
path = require('path');

//创建多层文件夹 同步
var mkdirsSync = function(dir_path, mode) {
  if (!fs.existsSync(dir_path)) {
    var path_tmp;
    dir_path.split(path.sep).forEach(function(dirname) {
      if (path_tmp) {
        path_tmp = path.join(path_tmp, dirname);
      }
      else {
        path_tmp = dirname;
      }
      if (!fs.existsSync(path_tmp) && !fs.mkdirSync(path_tmp, mode)) {
        return false;
      }
    });
  }
  return true;
}
