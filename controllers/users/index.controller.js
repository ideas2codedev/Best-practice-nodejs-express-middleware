/* Debug */
const SOURCE = 'expressmiddleware:controllers:users:index.controller.js'
const debug = require('debug')(SOURCE)

module.exports = {
	index: async (req, res, next) => {
        try {
            debug("index")
            res.status(200).send({id:1,name:'ideas2code',site: 'www.ideas2code.io'})
        } catch (error) {
            next(error)
        }
    }
}