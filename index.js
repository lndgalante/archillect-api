const { send } = require('micro')
const cors = require('micro-cors')()
const { router, get } = require('microrouter')

const scrapper = require('./scrapper')

const visuals = async (req, res) =>
  send(res, 200, await scrapper.visualsRoute(req.query.per))

const random = async (req, res) => send(res, 200, await scrapper.randomRoute())

const id = async (req, res) =>
  send(res, 200, await scrapper.idRoute(req.params.id))

const notFound = (req, res) =>
  send(res, 404, {
    error: 'Not found route',
    docs: 'https://github.com/lndgalante/archillect-unoffcial-api',
  })

module.exports = router(
  get('/visuals', cors(visuals)),
  get('/visuals/:id', cors(id)),
  get('/random', cors(random)),
  get('/*', cors(notFound))
)
