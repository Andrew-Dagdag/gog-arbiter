window.onload = () => {
  const element = document.getElementById("container")?.children[0];
  if (element != null) {
    element.innerHTML = "Some cool stuffs";
  }
  console.log("yeehaw I started");
};
