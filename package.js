Package.describe({
  name: "aldeed:geocoder",
  summary: "Easy geocoding by way of the node-geocoder package",
  version: "0.3.4",
  git: "https://github.com/aldeed/meteor-geocoder.git"
});

Npm.depends({
  'node-geocoder': '2.19.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore');
  api.export('GeoCoder', 'server');
  api.addFiles('geocoder.js', 'server');
});
