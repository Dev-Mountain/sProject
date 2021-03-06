module.exports = {
	entry: [
		"./src/app.js"
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: "babel"
			}
			, {
				test: /\.(png|jpg|jpeg)$/
				, loader: "file-loader?name=./assets/images/[name].[ext]"
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: "style!css"
			}
			, {
				test: /\.html$/
				, loader: "html"
			}
		]
	}
	, resolve: {
		extensions: [ "", ".js", ".css" ]
	}
	, output: {
		path: __dirname + "/public"
		, filename: "bundle.js"
	}
};
