let text = document.querySelector(".text");
const fonts = document.querySelector("#fonts");
const colors = document.querySelector("#colors");
const fontsize = document.querySelector("#fontsize");

colors.addEventListener("change", () => {
  window.localStorage.setItem("color", colors.value);
  text.style.color = colors.value;
});
fontsize.addEventListener("change", () => {
  window.localStorage.setItem("fontsize", fontsize.value);
  text.style.fontSize = fontsize.value;
});
fonts.addEventListener("change", () => {
  window.localStorage.setItem("fontfamily", fonts.value);
  text.style.fontFamily = fonts.value;
});

if (
  window.localStorage.getItem("color") ||
  window.localStorage.getItem("fontsize") ||
  window.localStorage.getItem("fontfamily")
) {
  colors.value = window.localStorage.getItem("color");
  fontsize.value = window.localStorage.getItem("fontsize");
  fonts.value = window.localStorage.getItem("fontfamily");

  text.style.color = window.localStorage.getItem("color");
  text.style.fontSize = window.localStorage.getItem("fontsize");
  text.style.fontFamily = window.localStorage.getItem("fontfamily");
}
