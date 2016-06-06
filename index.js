var fs = require('fs');
var path = require('path');
var xml2js = require('xml2js');
var imageMagic = require('imagemagick');
var colors = require('colors');
var _ = require('underscore');
var Q = require('q');
var mkdirp = require('mkdirp');

/**
 * @var {Object} console utils
 */
var display = {};
display.success = function (str) {
  str = '✓  '.green + str;
  console.log('  ' + str);
};
display.error = function (str) {
  str = '✗  '.red + str;
  console.log('  ' + str);
};
display.header = function (str) {
  console.log('');
  console.log(' ' + str.cyan.underline);
  console.log('');
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

/**
 * Resizes and creates a new icon in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} icon
 * @return {Promise}
 */
var resizeImage = function (imagePath, outDirectory, sizeEntry) {
  var deferred = Q.defer();
  try {
    var filePath = path.join(outDirectory, sizeEntry.fileName);
    imageMagic.resize({
      srcPath: imagePath,
      dstPath: filePath,
      quality: 1,
      format: sizeEntry.fileName.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
      width: sizeEntry.width,
      height: sizeEntry.height
    }, function (err, stdout, stderr) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve();
        display.success(sizeEntry.fileName + ' created');
      }
    });
  } catch (error) {
    deferred.reject(error);
  }
  return deferred.promise;
};


/**
 * Crops and creates a new splash in the platform's folder.
 *
 * @param  {Object} platform
 * @param  {Object} splash
 * @return {Promise}
 */
var cropImage = function (imagePath, outDirectory, sizeEntry) {
  var deferred = Q.defer();
  try {
    var filePath = path.join(outDirectory, sizeEntry.fileName);
    imageMagic.crop({
      srcPath: imagePath,
      dstPath: filePath,
      quality: 1,
      format: sizeEntry.fileName.replace(/.*\.(\w+)$/i, '$1').toLowerCase(),
      width: sizeEntry.width,
      height: sizeEntry.height
    }, function (err, stdout, stderr) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve();
        display.success(sizeEntry.fileName + ' created');
      }
    });
  } catch (error) {
    deferred.reject(err);
  }
  return deferred.promise;
};


module.exports = {
  generate: function (configName) {
    var config = require(configName);
    config.forEach(sourceEntry => {
      var outDirectory = sourceEntry.outDirectory;
      var imagePath = sourceEntry.source;
      var promise;

      checkDirectory(outDirectory).catch(err=> display.error(err)).then(function () {
        sourceEntry.sizes.forEach(sizeEntry => {
          if (sizeEntry.isCrop) {
            promise = cropImage(imagePath, outDirectory, sizeEntry);
          } else {
            promise = resizeImage(imagePath, outDirectory, sizeEntry);
          }

          return Q.when(promise).catch(err=> display.error(err));
        });
      });
    });
  }
};