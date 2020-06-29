"use strict"

const xml = require("xml2js")

const gotXml = options => async response => {
	options = {
		async: true,
		...options
	}
	
	response.body = await xml.parseStringPromise(response.body, options)

	return response
}

module.exports = options => ({
	hooks: {
		afterResponse: [gotXml(options)]
	}
})
