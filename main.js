const {
    app,
    BrowserWindow
} = require("electron");
const url = require("url");
const path = require("path");
let win;
app.on("ready", function() {
    win = new BrowserWindow({
        width: 400,
        height: 400
    });
    win.loadURL(url.format({
        pathname: path.join("", "index.html"),
        protocol: "file:",
        slashes: true
    }));
});