geocoder
=========================

A Meteor package that provides the geocoding features of the [node-geocoder](https://github.com/nchaulet/node-geocoder) package with a simple API.

## Installation

```bash
$ meteor add aldeed:geocoder
```

## Usage

Geocoding an address is simple. Get a new instance of `GeoCoder` and then call the `geocode` method on it, passing in the address string:

*server.js:*

```js
var geo = new GeoCoder();
var result = geo.geocode('29 champs elysée paris');
```

Note that unlike in the node package, the `geocode` method is synchronous. This makes it simple to use in a server method. If you prefer to pass a callback as the last argument, you can.

The `Google` service is used by default, but you can set the `GeocoderProvider` option when constructing if you want to use [a different provider supported by node-geocoder](https://github.com/nchaulet/node-geocoder#geocoder-provider).

You can also set the `HttpAdapter` option to `"Https"` to use HTTPS.

If you need to specify any of the extra options mentioned in the `node-geocoder` docs, you can pass those also as options to the constructor.

## Examples

*server.js:*

```js
// Reverse
var geo = new GeoCoder({
  geocoderProvider: "mapquest",
  httpAdapter: "https",
  apiKey: 'YOUR_API_KEY'
});
var result = geo.reverse(45.767, 4.833);
```
