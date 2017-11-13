const { send } = require('micro')
const { router, get } = require('microrouter')
const scrapper = require('./scrapper')

const visuals = async (req, res) => send(res, 200, await scrapper.visualsRoute(req.query.per))

const random = async (req, res) => send(res, 200, await scrapper.randomRoute())

const id = async (req, res) => send(res, 200, await scrapper.idRoute(req.params.id))

const notfound = (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/visuals', visuals),
  get('/random', random),
  get('/:id', id),
  get('/*', notfound)
)
