const path = require("path");

module.exports = {
  name: 'Progressive Web App',
  short_name: 'MyPWA',
  description: 'My awesome Progressive Web App!',
  background_color: '#ffffff',
	theme_color: "#455A64",
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
