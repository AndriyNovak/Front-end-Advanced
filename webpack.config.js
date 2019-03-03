var path = require("path")  // встроена бібліотека
var hwp = require("html-webpack-plugin");
module.exports = {
	entry:"./src/index.jsx",  //вход в файл "vasia (автоматично ставить main)":"./src/index.js",
	
	output: {
		path: path.join (__dirname, "./dist"), //виход в файл [name].build.js
		filename: "[name].build.js"
	},
	module: {
    rules: [
      {
        test: /\.jsx$/,  // регулярний вираз для пошуку вайлу з розширенням jsx або js , $ - каже що шукаємо в кінці
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
	plugins: [
		new hwp({template: path.join(__dirname, './src/index.html')}) 
		// Створили index.html в папці виходу dist, бере як зразок файл html з папки src
		

	]
}