var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var imageMagic = require('imagemagick');
var _ = require('underscore');
var Q = require('q');
var mkdirp = require('mkdirp');

require('colors');

var display = {
  success: function (str) {
    str = '✓  '.green + str;
    console.log('  ' + str);
  },
  error: function (str) {
    str = '✗  '.red + str;
    console.log('  ' + str);
  },
  imageInfoLog: function (fileName, sizeEntry) {
    this.success(fileName + ' created => ' + sizeEntry.width + 'x' + sizeEntry.height);
  }
};


var extractExtension = function (fileName) {
  return fileName.replace(/.*\.(\w+)$/i, '$1').toLowerCase();
};


var checkDirectory = function (outDirectory) {
  var deferred = Q.defer();
  mkdirp(outDirectory, function (err) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve();
    }
  });

  return deferred.promise;
};


var resizeImage = function (imagePath, outDirectory, sizeEntry) {
  var deferred = Q.defer();
  try {
    var filePath = path.join(outDirectory, sizeEntry.fileName);
    imageMagic.resize({
      srcPath: imagePath,
      dstPath: filePath,
      quality: 1,
      format: extractExtension(sizeEntry.fileName),
      width: sizeEntry.width,
      height: sizeEntry.height
    }, function (err, stdout, stderr) {
      if (err) {
        deferred.reject(err);
      } else {
        display.imageInfoLog(filePath, sizeEntry);
        deferred.resolve();
      }
    });
  } catch (error) {
    deferred.reject(error);
  }
  return deferred.promise;
};


var cropImage = function (imagePath, outDirectory, sizeEntry) {
  var deferred = Q.defer();
  try {
    var filePath = path.join(outDirectory, sizeEntry.fileName);
    imageMagic.crop({
      srcPath: imagePath,
      dstPath: filePath,
      quality: 1,
      format: extractExtension(sizeEntry.fileName),
      width: sizeEntry.width,
      height: sizeEntry.height
    }, function (err, stdout, stderr) {
      if (err) {
        deferred.reject(err);
      } else {
        display.imageInfoLog(filePath, sizeEntry);
        deferred.resolve();
      }
    });
  } catch (error) {
    deferred.reject(err);
  }
  return deferred.promise;
};


module.exports = {
  generate: function (configName) {
    var config = JSON.parse(fs.readFileSync(configName, 'utf8'));

    config.forEach(sourceEntry => {
      var outDirectory = sourceEntry.outDirectory;
      var imagePath = sourceEntry.source;
      var promise;

      checkDirectory(outDirectory).catch(err => display.error(err)).then(function () {
        sourceEntry.sizes.forEach(sizeEntry => {
          if (sourceEntry.isCrop) {
            promise = cropImage(imagePath, outDirectory, sizeEntry);
          } else {
            promise = resizeImage(imagePath, outDirectory, sizeEntry);
          }

          return Q.when(promise).catch(err => display.error(err));
        });
      });
    });
  }
};