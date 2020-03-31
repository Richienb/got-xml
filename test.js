const test = require("ava")
const gotXml = require(".")
const got = require("got").extend(gotXml())

// eslint-disable-next-line camelcase
const expectedResult = { breakfast_menu: { food: [{ name: ["Belgian Waffles"], price: ["$5.95"], description: ["Two of our famous Belgian Waffles with plenty of real maple syrup"], calories: ["650"] }, { name: ["Strawberry Belgian Waffles"], price: ["$7.95"], description: ["Light Belgian waffles covered with strawberries and whipped cream"], calories: ["900"] }, { name: ["Berry-Berry Belgian Waffles"], price: ["$8.95"], description: ["Light Belgian waffles covered with an assortment of fresh berries and whipped cream"], calories: ["900"] }, { name: ["French Toast"], price: ["$4.50"], description: ["Thick slices made from our homemade sourdough bread"], calories: ["600"] }, { name: ["Homestyle Breakfast"], price: ["$6.95"], description: ["Two eggs, bacon or sausage, toast, and our ever-popular hash browns"], calories: ["950"] }] } }

test("main", async t => {
	const { body } = await got("https://www.w3schools.com/xml/simple.xml")
	t.deepEqual(body, expectedResult)
})
