import { OptionsV2 } from "xml2js"
import { GotBodyOptions } from "got"

/**
 * Got XML support.
 * @param options Options to pass to [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options).
 * @example
 * ```
 * const got = require("got")
 * const xmlGot = got.extend(require("got-xml")())
 *
 * (async () => {
 *  const {body} = await xmlGot("https://www.w3schools.com/xml/simple.xml")
 *
 *  console.log(body)
 *  //=> { breakfast_menu: { food: ... } }
 * })()
 * ```
*/
declare function gotXml(options?: OptionsV2): GotBodyOptions

export = gotXml
