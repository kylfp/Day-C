const myButton = document.getElementById("test-btn");

myButton.addEventListener("click", () => {
  console.log("View Script > submit Click");
  window.Bridge.sendSubmit(lead);
})
