"use strict"

const xml = require("xml2js")

const gotXml = options => async response => {
	response.body = await xml.parseStringPromise(response.body, options)

	return response
}

module.exports = options => ({
	hooks: {
		afterResponse: [gotXml(options)]
	}
})
