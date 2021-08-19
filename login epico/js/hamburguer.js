const btn = document.querySelector(".div__hamburguesa");
const menu = document.querySelector(".menu-lateral");
const enlaces = document.querySelectorAll("li");
// console.log(enlaces);
btn.addEventListener("click", () => {
  menuLateral();
});
const menuLateral = () => {
  if (
    !menu.classList.contains("mostrar") &&
    !menu.classList.contains("ocultar")
  ) {
    console.log("mostrar");
    menu.classList.add("mostrar");
  } else {
    if (menu.classList.contains("ocultar")) {
      console.log("ocultar");
      menu.classList.remove("ocultar");
      menu.classList.add("mostrar");
    } else {
      menu.classList.add("ocultar");
      menu.classList.remove("mostrar");
    }
  }
};
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("mostrar");
    menu.classList.add("ocultar");
  });
});
