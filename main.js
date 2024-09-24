const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (event) => {
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  btn.Style.setProperty("--xPos", x + "px");
  btn.Style.setProperty("--yPos", y + "px");
});
