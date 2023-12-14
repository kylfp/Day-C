document.getElementById("ds-add-btn").addEventListener("click" , () => {
  document.getElementById("new-ds-popup").showModal();
})

document.getElementById("du-add-btn").addEventListener("click", () => {
  document.getElementById("new-du-popup").showModal();
})

function newElement() {
  let li = document.createElement("li");
}

// Example of sending data to main
// document.getElementById("fakebtn").addEventListener("click", () => {
//   console.log("Button Pressed - This is in renderer.js");
//   let eventInfo = document.getElementById("fakeinput").value;
//   window.Bridge.sendSubmit(eventInfo);
// });

document.getElementById("dssubmit").addEventListener("click", () => {
  console.log("DS Submit Action Init");
  let eventInfo = {
    name: document.getElementById("dsnameinput").value,
    date: document.getElementById("dsdateinput").value,
    notes: document.getElementById("dsnotesinput").value,
    type: 1
  }
  window.eventBridge.sendEvent(eventInfo);
})

document.getElementById("dusubmit").addEventListener("click", () => {
  console.log("DU Submit Action Init");
  let eventInfo = {
    name: document.getElementById("dunameinput").value,
    date: document.getElementById("dudateinput").value,
    notes: document.getElementById("dunotesinput").value,
    type: 2
  }
  window.eventBridge.sendEvent(eventInfo);
})
