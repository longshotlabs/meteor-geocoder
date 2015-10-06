var geocoder = Npm.require('node-geocoder');

// backwards compatibility
if (typeof Meteor.wrapAsync === "undefined") {
  Meteor.wrapAsync = Meteor._wrapAsync;
}

GeoCoder = function geoCoderConstructor(options) {
  var self = this;
  self.options = _.extend({
    geocoderProvider: 'google',
    httpAdapter: 'http'
  }, options || {});
};

var gc = function (address, options, callback) {
  var g = geocoder(options.geocoderProvider, options.httpAdapter, options);
  g.geocode(address, callback);
};

GeoCoder.prototype.geocode = function geoCoderGeocode(address, callback) {
  if (callback) {
    callback = Meteor.bindEnvironment(callback, function (error) {
      if (error) throw error;
    });
    gc(address, this.options, callback);
  } else {
    return Meteor.wrapAsync(gc)(address, this.options);
  }
};

var rv = function (lat, lng, options, callback) {
  var g = geocoder(options.geocoderProvider, options.httpAdapter, options);
  g.reverse({lat: lat, lon: lng}, callback);
};

GeoCoder.prototype.reverse = function geoCoderReverse(lat, lng, callback) {
  if (callback) {
    callback = Meteor.bindEnvironment(callback, function (error) {
      if (error) throw error;
    });
    rv(lat, lng, this.options, callback);
  } else {
    return Meteor.wrapAsync(rv)(lat, lng, this.options);
  }
};
