var geocoder = Npm.require('node-geocoder');

GeoCoder = function geoCoderConstructor(options) {
  var self = this;
  self.options = _.extend({
    geocoderProvider: 'google',
    httpAdapter: 'http'
  }, options || {});
};

var gc = function (address, options, callback) {
  var g = geocoder.getGeocoder(options.geocoderProvider, options.httpAdapter, options);
  g.geocode(address, callback);
};

GeoCoder.prototype.geocode = function geoCoderGeocode(address, callback) {
  if (callback) {
    callback = Meteor.bindEnvironment(callback, function (error) { if (error) throw error; });
    gc(address, this.options, callback);
  } else {
    return Meteor._wrapAsync(gc)(address, this.options);
  }
};

var rv = function (lat, lng, options, callback) {
  var g = geocoder.getGeocoder(options.geocoderProvider, options.httpAdapter, options);
  g.reverse(lat, lng, callback);
};

GeoCoder.prototype.reverse = function geoCoderReverse(lat, lng, callback) {
  if (callback) {
    callback = Meteor.bindEnvironment(callback, function (error) { if (error) throw error; });
    rv(lat, lng, this.options, callback);
  } else {
    return Meteor._wrapAsync(rv)(lat, lng, this.options);
  }
};