# splashicon-generator

Configurable splash and icon image generator.

Configuration example `image-sizes.json`:

```json
[
{
    "source": "./model/icon.png",
    "outDirectory": "res/icons",
    "isCrop": false, //toggle crop/resize mode
    "sizes": [
      {
        "fileName": "iphone_2x.png",
        "width": 120,
        "height": 120
      },
      {
        "fileName": "iphone_3x.png",
        "width": 180,
        "height": 180
      },
      {
        "fileName": "ipad.png",
        "width": 76,
        "height": 76
      },
      {
        "fileName": "ipad_2x.png",
        "width": 152,
        "height": 152
      }
   }
},
{
   ...
}
]
```

Full version of file in repo's root.

###Requirements

* ImageMagic
* Node.JS v5.5.0 or higher

###Install

```sh
npm i -g https://github.com/trsdln/splashicon-generator.git
```

###Usage example

```sh
splashicon-generator --config=path-to-your-json-config
```

---


### License

MIT
