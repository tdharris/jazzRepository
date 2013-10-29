module.exports = function (app) {
	var routes = require("./routes.js"),
	    auth = require("./auth.js");

	module.exports = function(app) {
	    routes(app);

	    app.listen(process.env.PORT);
	    console.log("server listening on port xxxx");
	};
};