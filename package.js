Package.describe({
  name: "geocoder",
  summary: "Easy geocoding by way of the node-geocoder package"
});

Npm.depends({
  'node-geocoder': '2.6.0'
});

Package.on_use(function(api) {
  api.export('GeoCoder', 'server');
  api.add_files('geocoder.js', 'server');
});
