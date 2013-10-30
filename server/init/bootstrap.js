module.exports=function (app, express) {
	var routes = require("../routes.js");
	// auth = require("../auth.js")(app, express);
	
    routes(app);

    app.listen(process.env.PORT);
    console.log("server listening on port xxxx");
};