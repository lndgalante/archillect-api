# Archillect Unofficial API

### Get a list of visuals

It brings a list of the lastest 20 visuals by default

> GET [https://archillect-api.now.sh/visuals](https://archillect-api.now.sh/visuals)

Example response:

```json
[
  {
    "source": "http://78.media.tumblr.com/7c592f7e713e84d222bcccdeceb6ab44/tumblr_nh8spcb05S1rs8w78o1_1280.jpg",
    "original": "http://archillect.com/147848",
    "id": 147848
  },
  {
    "source": "http://78.media.tumblr.com/4e2fa2ff9173d20bc6962dd8eebb27f0/tumblr_oszlouVau71qgiw5to1_1280.jpg",
    "original": "http://archillect.com/147847",
    "id": 147847
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
  "source": "http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif",
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
  "source": "http://68.media.tumblr.com/9a621c231d9809e9b7f0e018cf00c52d/tumblr_n4nxqcKv2p1qhs3voo1_r1_500.png",
  "original": "http://archillect.com/131283",
  "id": 131283
}
```

#### License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
