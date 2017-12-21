module.exports = function (app) {
	var index = require('../controllers/controller.index');
	var ctrl = require('../controllers/controller.main');
	app.get("/", index.getUserDetails);

	app.post("/api/getMeaning", ctrl.getMeaning);
	console.log('router Initialized');
};
