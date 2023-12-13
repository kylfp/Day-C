const func = async () => {
  const response = await window.versions.ping()
  console.log(response)
}

const versionInfo = document.getElementById("info");
versionInfo.textContent = `This app is using chrome ${versions.chrome()}`;

func();
