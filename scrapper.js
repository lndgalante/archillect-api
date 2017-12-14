const scrapeIt = require('scrape-it')

class ArchillectScrapper {
  constructor() {
    this.baseUrl = 'http://archillect.com'
    this.min = 1
  }

  async getMax() {
    try {
      const res = await scrapeIt(this.baseUrl, {
        max: {
          selector: 'div#container > a',
          attr: 'href',
          convert: x => x.replace('/', ''),
        },
      })

      return Number(res.max)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getImageSrc(id) {
    try {
      const res = await scrapeIt(`${this.baseUrl}/${id}`, {
        src: {
          selector: 'img#ii',
          attr: 'src',
        },
      })

      return res.src
    } catch (error) {
      throw new Error(error)
    }
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1
  }

  async randomRoute() {
    const max = await this.getMax()
    const id = this.getRandomNumber(max)
    const source = await this.getImageSrc(id)
    const original = `${this.baseUrl}/${id}`

    return {
      source,
      original,
      id,
    }
  }

  async idRoute(id) {
    id = Number(id)
    if (!Number.isInteger(id)) return { error: `The id should be an integer` }

    const max = await this.getMax()
    if (id < this.min || id > max) return { error: `The id ${id} should be between ${this.min} and ${max}` }

    const source = await this.getImageSrc(id)
    const original = `${this.baseUrl}/${id}`

    return {
      source,
      original,
      id,
    }
  }

  async visualsRoute(per = 20) {
    per = Number(per)
    if (!Number.isInteger(per)) return { error: 'The per query should be an integer' }
    if (per < 1) return { error: 'The per query should be bigger than 0' }
    if (per > 200) return { error: 'You cannot get more than 200 visuals' }

    let max = await this.getMax()
    const ids = []

    for (let i = 0; i < per; i++) {
      ids[i] = max
      max--
    }

    const result = await Promise.all(
      ids.map(async id => {
        const source = await this.getImageSrc(id)
        const original = `${this.baseUrl}/${id}`

        return {
          source,
          original,
          id,
        }
      })
    )

    return result
  }
}

module.exports = new ArchillectScrapper()
