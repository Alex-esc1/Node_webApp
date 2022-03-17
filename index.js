const data = require('./users.json')
const { stringify: stringifyUser, capitalize } = require('./users.js')

data.forEach(user => {
    console.log(capitalize(user.gender))
	const formattedUserStr = stringifyUser(user)
	console.log(formattedUserStr)
})
