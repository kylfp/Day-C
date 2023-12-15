// Open/Close Modals
document.getElementById("dsadd-btn").addEventListener("click" , () => {
  document.getElementById("newds-popup").showModal();
})

document.getElementById("closenewdspopup-btn").addEventListener("click", () => {
  document.getElementById("newds-popup").close();
})

document.getElementById("duadd-btn").addEventListener("click", () => {
  document.getElementById("newdu-popup").showModal();
})

document.getElementById("closenewdupopup-btn").addEventListener("click", () => {
  document.getElementById("newdu-popup").close();
})

document.getElementById("opensettings-btn").addEventListener("click", () => {
  document.getElementById("settings-popup").showModal();
})

document.getElementById("closesettingspopup-btn").addEventListener("click", () => {
  document.getElementById("settings-popup").close();
})

// Events
document.getElementById("dssubmit-btn").addEventListener("click", () => {
  console.log("DS Submit Action Init");
  let eventInfo = {
    name: document.getElementById("dsname-input").value,
    date: document.getElementById("dsdate-input").value,
    notes: document.getElementById("dsnotes-input").value,
    type: 1
  }
  // addDsItem(eventInfo);
  window.eventBridge.sendEvent(eventInfo);
})

document.getElementById("dusubmit-btn").addEventListener("click", () => {
  console.log("DU Submit Action Init");
  let eventInfo = {
    name: document.getElementById("duname-input").value,
    date: document.getElementById("dudate-input").value,
    notes: document.getElementById("dunotes-input").value,
    type: 2
  }
  window.eventBridge.sendEvent(eventInfo);
})

function addDsItem(eventInfo) {
  var li = document.createElement("li");
  var name = document.createTextNode(eventInfo.name.data);
  console.log("Event Name: " + name);
  var date = document.createTextNode(eventInfo.date.data);
  console.log("Event Date: " + date);
  var notes = document.createTextNode(eventInfo.notes.data);
  console.log("Event Notes: " + notes);
  li.appendChild(name);
  li.appendChild(date);
  li.appendChild(notes);
  let masterList = document.getElementById("ds-list");
  masterList.appendChild(li);
}

// Settings
document.getElementById("storepath-btn").addEventListener("click", async () => {
  console.log("Settings/storepath action init");
  const storePath = await window.electronAPI.openDirectory();
  document.getElementById("storepath-label").textContent = storePath;
});

document.getElementById("exportpath-btn").addEventListener("click", async () => {
  console.log("Settings/exportpath action init");
  const exportPath = await window.electronAPI.openDirectory();
  document.getElementById("exportpath-label").textContent = exportPath;
})

document.getElementById("submitsettings-btn").addEventListener("click", () => {
  console.log("Settings submission action init");
  let storePath = document.getElementById("storepath-label").textContent;
  let exportPath = document.getElementById("exportpath-label").textContent;

  let settings = {
    storePath: storePath,
    exportPath: exportPath
  }
  window.settingsBridge.sendSettings(settings);
})
