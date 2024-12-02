const myPar =document.querySelectorAll(".color");
console.log(window.localStorage.color)
if (window.localStorage.color != null ){
    document.documentElement.style.setProperty("--main-color" , `${window.localStorage.color}` )
};

myPar.forEach(function (e) {
    e.addEventListener("click" , function (ele) {
        window.localStorage.setItem("color", `${e.dataset.color}`);
        document.documentElement.style.setProperty("--main-color" , `${window.localStorage.getItem("color")}` )
    });
});

const myPPar= document.querySelector(".par");
const myIcon= document.querySelector(".iconn");

myIcon.addEventListener("click" , (e)=>{
    if (myPPar.classList.contains("evant") ){
        myPPar.classList.remove("evant")
        e.currentTarget.classList.remove("evantt")
    }else{
        myPPar.classList.add("evant")
        e.currentTarget.classList.add("evantt")
    };

});
