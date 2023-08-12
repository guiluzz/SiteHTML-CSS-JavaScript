const openMenu = document.querySelector(".abrir")
const fecharMenu = document.querySelector(".fechar")
const toggleMenu = document.querySelector(".toggle-menu")

openMenu.addEventListener("click", ()=> {
  toggleMenu.style.display = "flex"
  openMenu.style.display = "none"
  fecharMenu.style.display = "flex"
})

fecharMenu.addEventListener("click", ()=> {
  fecharMenu.style.display = "none"
  toggleMenu.style.display = "none"
  openMenu.style.display = "flex"
})