var express = require("express");
var bodyParser = require("body-parser");

module.exports = function () {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.set("views", "./client/views");
	app.set("view engine", "ejs");
	app.use(express.static("./public"));
	console.log("express initialized");

	require("../routers/router.main")(app);

	return app;
}
