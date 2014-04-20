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

GeoCoder.prototype.geocode = function geoCoderGeocode(address) {
	return Meteor._wrapAsync(gc)(address, this.options);
};