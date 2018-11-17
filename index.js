const { send } = require('micro')
const cors = require('micro-cors')()
const { router, get } = require('microrouter')
const ms = require('ms')
const scrapper = require('./scrapper')
const cache = require('./cache')

const visuals = async (req, res) => {
  const data = await cache(
    ms('10m'),
    async req => {
      try {
        return await scrapper.visualsRoute(req.query.per)
      } catch (error) {
        return null
      }
    },
    req,
    res
  )

  if (!data) {
    send(res, 500, 'Internal Server Error')
  } else {
    send(res, 200, data)
  }
}

const random = async (req, res) => {
  const data = await cache(
    ms('10m'),
    async () => {
      try {
        return await scrapper.randomRoute()
      } catch (error) {
        return null
      }
    },
    req,
    res
  )

  if (!data) {
    send(res, 500, 'Internal Server Error')
  } else {
    send(res, 200, data)
  }
}

const id = async (req, res) => {
  // Cache with 'null' ms -- means cache forever
  const data = await cache(
    null,
    async req => {
      try {
        return await scrapper.idRoute(req.params.id)
      } catch (error) {
        return null
      }
    },
    req,
    res
  )

  if (!data) {
    send(res, 500, 'Internal Server Error')
  } else {
    send(res, 200, data)
  }
}

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
