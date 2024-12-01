const myPar =document.querySelectorAll(".colorpar span");
console.log(window.localStorage.color)
if (window.localStorage.color != null ){
    document.documentElement.style.setProperty("--main-color" , `${window.localStorage.color}` )
}

myPar.forEach(function (e) {
    e.addEventListener("click" , function (ele) {
        window.localStorage.setItem("color", `${e.className}`)
        document.documentElement.style.setProperty("--main-color" , `${window.localStorage.getItem("color")}` )
    })
})