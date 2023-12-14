const { contextBridge,ipcMain, ipcRenderer } = require("electron");

//Sending Data to Main
// let sendSubmit = (eventInfo) => {
//   console.log("Event Info Received via Preload");
//   //line to send to main...must be exposed to world though
//   ipcRenderer.send("addEvent", eventInfo);
// }
//
// // Json object to be exposed to renderer process
// let indexBridge = {
//   sendSubmit: sendSubmit
// }
//
// //You can have multple bridges...in this case its named "Bridge"
// // You also expose a standard json object with bridge...in this case named indexBridge
// contextBridge.exposeInMainWorld("Bridge", indexBridge);


// Sending New Event
let sendEvent = (eventInfo) => {
  console.log("eventInfo -> preload.js")
  ipcRenderer.send("addEvent", eventInfo);
}

let eventInfoBridge = {
  sendEvent: sendEvent
}

contextBridge.exposeInMainWorld("eventBridge", eventInfoBridge);
