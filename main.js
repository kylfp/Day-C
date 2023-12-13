const { BrowserWindow, app } = require("electron");
const path = require("path");

function createMainWindow() {
  const mainWin = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
        preload: path.join(__dirname, "renderer/preload.js")
    }
  });
  mainWin.loadFile("renderer/index.html");
}

app.whenReady().then(() => {
  createMainWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
});

ipcMain.on("gotLead", (event, lead) => {
  console.log("Main Process > gotLead")
  console.log(lead);
})
