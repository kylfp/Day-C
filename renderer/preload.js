const { contextBridge, ipcMain, ipcRenderer} = require("electron");

let sendSubmit = (lead) => {
  console.log(lead);
  console.log("Renderer Process > sendSubmit");
  ipcRenderer.send("gotLead", lead);
}

let indexBridge = {
  sendSubmit: sendSubmit
}

contextBridge.exposeInMainWorld("Bridge", indexBridge);
