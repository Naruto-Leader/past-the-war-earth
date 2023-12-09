var app = require("./app.js");
require("greenlock-express")
    .init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",
    // contact for security and critical bug notices
    maintainerEmail: "artem.v.shamsutdinov@dataindependence.net",
    // whether or not to run at cloudscale
    cluster: false
})
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);
//# sourceMappingURL=server.js.map