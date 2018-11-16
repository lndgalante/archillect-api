const { send } = require('micro')
const cors = require('micro-cors')()
const { router, get } = require('microrouter')
const cache = require('micro-cacheable')
const ms = require('ms')
const scrapper = require('./scrapper')

const visuals = cache(ms('10m'), async (req, res) => {
  try {
    send(res, 200, await scrapper.visualsRoute(req.query.per))
  } catch (error) {
    send(res, 500, 'Internal server error')
  }
})

const random = cache(ms('10m'), async (req, res) => {
  try {
    send(res, 200, await scrapper.randomRoute())
  } catch (error) {
    send(res, 500, 'Internal server error')
  }
})

const id = cache(ms('24h'), async (req, res) => {
  try {
    send(res, 200, await scrapper.idRoute(req.params.id))
  } catch (error) {
    send(res, 500, 'Internal server error')
  }
})

const notFound = (req, res) => {
  send(res, 404, {
    error: 'Not found route',
    docs: 'https://github.com/lndgalante/archillect-api',
  })
}

module.exports = router(
  get('/visuals', cors(visuals)),
  get('/visuals/:id', cors(id)),
  get('/random', cors(random)),
  get('/*', cors(notFound))
)
