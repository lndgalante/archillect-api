const responses = []

const cache = async (ms, func, req, res) => {
  const previous = responses[req.url]
  if (previous && (!previous.date || previous.date > new Date())) {
    return previous.data
  }

  const data = await func(req, res)
  responses[req.url] = {
    data,
    date: ms && new Date(new Date().getTime() + ms),
  }
  return data
}

module.exports = cache
