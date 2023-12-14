// Modules
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

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
  ipcMain.handle("ping", () => "pong")
  createMainWindow();

  // Open window if none open (mac things)
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  });
});

// Terminate app when windows closed (no mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("addEvent", (event, eventInfo) => {
  console.log("eventInfo -> main.js")
  console.log(eventInfo);
})
