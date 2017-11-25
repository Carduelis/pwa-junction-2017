const path = require("path");

module.exports = {
  name: 'Make concert great again!',
	short_name: 'Concert Fly',
  description: 'Do a concert trip in a few seconds!',
  background_color: '#8767CF',
	theme_color: "#5890E8",
  icons: [
    {
      src: path.resolve('assets/icon.png'),
      sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
    },
    {
      src: path.resolve('assets/large-icon.png'),
      size: '1024x1024' // you can also use the specifications pattern
    }
  ]
}
