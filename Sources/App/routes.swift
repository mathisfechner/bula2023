import Fluent
import Vapor

func routes(_ app: Application) throws {
    var counter = 0;
    
    app.get { req -> Response in
        counter += 1
        return req.fileio.streamFile(at: "./Public/index.html")
    }
    app.get("**") { req -> Response in
        counter += 1
        return req.fileio.streamFile(at: "./Public/index.html")
    }
    if !app.environment.isRelease {
        app.get("kill") { req -> Response in
            app.server.shutdown()
            return req.redirect(to: "")
        }
    }
    app.get("count") {_ in return counter}
}
