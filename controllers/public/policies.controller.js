/* Debug */
const SOURCE = 'expressmiddleware:controllers:public:policies.controllers.js'
const debug = require('debug')(SOURCE)
/* Environments variables */
var env = require('../../config/environments.json')[process.env.NODE_ENV || 'development']

module.exports = {
	checkApiAuthorization: (req, res, next) => {
        try {
            debug("Checking authorization: "+req.headers.authorization)
            let apiKey = req.headers.authorization
            if (!apiKey || apiKey != ("Bearer " + env.authorizationKey)) {
                let error = {
                    msg: 'Invalid authorization'
                }
                res.status(401).send(error)
                return
            }
            debug("Authorized!")
            next()
        } catch (error) {
            next(error)
        }
	}
}