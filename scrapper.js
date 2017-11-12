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
          convert: x => x.replace('/', '')
        }
      })

      return res.max
    } catch (error) {
      throw new Error(error)
    }
  }

  async getImageSrc(id) {
    try {
      const res = await scrapeIt(`${this.baseUrl}/${id}`, {
        src: {
          selector: 'img#ii',
          attr: 'src'
        }
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
      id
    }
  }

  async idRoute(id) {
    const max = await this.getMax()

    if (id < this.min || id > max)
      return { error: `Only ids between ${this.min} and ${max}` }

    const source = await this.getImageSrc(id)
    const original = `${this.baseUrl}/${id}`

    return {
      source,
      original,
      id
    }
  }
}

module.exports = new ArchillectScrapper()
