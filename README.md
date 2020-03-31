# got-xml [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/got-xml/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/got-xml)

Got XML support.

[![NPM Badge](https://nodei.co/npm/got-xml.png)](https://npmjs.com/package/got-xml)

## Install

```sh
npm install got-xml
```

## Usage

```js
const got = require("got")
const xmlGot = got.extend(require("got-xml")())

(async () => {
	const {body} = await xmlGot("https://www.w3schools.com/xml/simple.xml")
	
	console.log(body)
	//=> { breakfast_menu: { food: ... } }
})()
```

## API

### xmlGot(options?)

#### options

Type: `object`

Options to pass to [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options).
