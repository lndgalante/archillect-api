# Archillect Unofficial API

### Get a list of visuals

It brings a list of the lastest 20 visuals by default

> GET [https://archillect-api.now.sh/visuals](https://archillect-api.now.sh/visuals)

Example response:

```json
[
  {
    "sourceLinks": [
      "https://www.google.com/searchbyimage?safe=offℑurl=https://78.media.tumblr.com/49424df2098547088e82e50b7d20bcc2/tumblr_ort7nwa1EO1sr19s8o1_1280.jpg",
      "http://new-brutalism.tumblr.com/post/162015765471/preston-bus-station-2-keith-ingham-and-charles"
    ],
    "imageSource": "https://78.media.tumblr.com/49424df2098547088e82e50b7d20bcc2/tumblr_ort7nwa1EO1sr19s8o1_1280.jpg",
    "original": "http://archillect.com/184152",
    "id": 184152
  },
  ...
]
```

### Get a list of a number of visuals

You could also ask for a number of the latest visuals through the `per` query.
With 200 maximum.

> GET [https://archillect-api.now.sh/visuals?per=120](https://archillect-api.now.sh/visuals?per=120)

### Get an id

Brings one visual id specified

> GET [https://archillect-api.now.sh/visuals/147836](https://archillect-api.now.sh/visuals/147836)

Example esponse:

```json
{
  "sourceLinks": [
    "https://www.google.com/searchbyimage?safe=offℑurl=http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif"
  ],
  "imageSource": "http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif",
  "original": "http://archillect.com/147836",
  "id": 147836
}
```

### Get a random

Brings one random visual

> GET [https://archillect-api.now.sh/random](https://archillect-api.now.sh/random)

Example esponse:

```json
{
  "sourceLinks": [
    "https://www.google.com/searchbyimage?safe=offℑurl=http://66.media.tumblr.com/937d59f3248ec51df8641332e9aa61d9/tumblr_ncb4fpPq0t1r94dw8o1_1280.jpg",
    "http://www.yellowtrace.com.au/fearon-hay-architects-harbour-edge-house/",
    "http://kazu721010.tumblr.com/post/98145993655/harbour-edge-house-fearon-hay-architects"
  ],
  "imageSource": "http://66.media.tumblr.com/937d59f3248ec51df8641332e9aa61d9/tumblr_ncb4fpPq0t1r94dw8o1_1280.jpg",
  "original": "http://archillect.com/74786",
  "id": 74786
}
```

#### License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
