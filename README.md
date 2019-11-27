# identify-by-ip-2000
API for get GEO Locations (country, region, city, timezone, latitude/longitude) by IP address.
Both IPv4 and IPv6 addresses are supported.

## Getting Started
This API includes GeoLite data created by MaxMind, available from [http://maxmind.com](http://maxmind.com).

## Installing
The project can be run by building the docker contained and then starting it
```bash
docker build -t identify-by-ip-2000 .
docker run --rm -d -p 8080:8080 identify-by-ip-2000
```
or without docker by command:
```bash
npm i && npm run start
```

For update database you should rebuild docker container or run:
```bash
npm run dbupdate
```

## Dependencies
* [GeoIP-Lite](https://www.npmjs.com/package/geoip-lite)
* [JSON schema validator](https://github.com/tdegrunt/jsonschema)
* [Winston logger](https://github.com/winstonjs/winston)

## Running the tests
To run test use this command:

```bash
npm run test
```

## Examples
Make a "GET" request:
* [http://127.0.0.1:8080/v1/locations/?ip=35.156.49.254](http://127.0.0.1:8080/v1/locations/?ip=35.156.49.254) -  / for IPv4
* [http://127.0.0.1:8080/v1/locations/?ip=2001:4860:4860::8888](http://127.0.0.1:8080/v1/locations/?ip=2001:4860:4860::8888) -  / for IPv6

Output message example:
```json
{
  "range": [
    597438464,
    597440511
  ],
  "country": "DE",
  "region": "HE",
  "eu": "1",
  "timezone": "Europe/Berlin",
  "city": "Frankfurt am Main",
  "ll": [
    50.1155,
    8.6842
  ],
  "metro": 0,
  "area": 200
}
```

## API documentation
[http://127.0.0.1:8080/docs/](http://127.0.0.1:8080/docs/)