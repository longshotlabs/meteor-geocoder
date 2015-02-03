Package.describe({
  name: "aldeed:geocoder",
  summary: "Easy geocoding by way of the node-geocoder package",
  version: "0.3.4",
  git: "https://github.com/aldeed/meteor-geocoder.git"
});

Npm.depends({
  'node-geocoder': '2.14.0'
});

Package.onUse(function(api) {
  api.export('GeoCoder', 'server');
  api.addFiles('geocoder.js', 'server');
});
