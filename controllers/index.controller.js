/* Debug */
const SOURCE = 'expressmiddleware:controllers:index.controller.js'
const debug = require('debug')(SOURCE)

module.exports = {
	index: (req, res, next) => {
        try {
            debug("home page.")
            res.render('index', { title: 'Best practices with express & middleware by www.ideas2code.io' });
        } catch (error) {
            next(error)
        }
    }
}