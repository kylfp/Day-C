// Modules
const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

const isWin = process.platform === "win32";
const isLinux = process.platform === "linux";
const isMac = process.platform === "darwin";

// Main Window Function
const createMainWindow = () => {
  const mainWin = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  mainWin.loadFile(path.join(__dirname, "renderer/index.html"));
}

// Execute when app is loaded
app.whenReady().then(() => {
  ipcMain.handle('dialog:openDirectory', handleDirectoryOpen)
  createMainWindow();

  // Open window if none open (mac things)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  });
});

// Terminate app when windows closed (no mac)
app.on('window-all-closed', () => {
  if (!isMac) app.quit()
})

// Events
ipcMain.on("addEvent", (event, eventInfo) => {
  console.log("eventInfo -> main.js");
  console.log(eventInfo);
  // fs.appendFileSync()
})

// Settings
async function handleDirectoryOpen () {
  let chooserProps = { properties: ["openDirectory"]};
  const { canceled, filePaths } = await dialog.showOpenDialog(chooserProps);
  if (!canceled) {
    return filePaths[0]
  }
}

ipcMain.on("settings", (event, settings) => {
  console.log("settings --> main.js");
  console.log(settings);
})

