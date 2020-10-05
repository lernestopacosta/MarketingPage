
const btnburguer  = document.querySelector(".btnburguer")
const icon = document.querySelector(".btnburguer i")
const burguermenu = document.querySelector(".burguermenu")

let value = false;
btnburguer.addEventListener("click",() => {
    console.log(!value)
    if(!value) {
        value = true
        burguermenu.style.display = "flex";
        icon.classList.add("fa-times");
    } else {
        value = false;
        burguermenu.style.display = "none";
        icon.classList.remove("fa-times");
    }
})