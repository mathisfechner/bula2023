import Fluent
import Vapor

func routes(_ app: Application) throws {
    app.get { req in
        return req.view.render("index")
    }
    app.get("**") {$0.view.render("index")}
}
