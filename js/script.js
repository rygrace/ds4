document.querySelector("#big").addEventListener
("click",function(){
    console.log("I am in small")
    bd = document.querySelector("body")
    bd.style.fontSize = "2em"
});

document.querySelector("#bigger").addEventListener
("click",function(){
    console.log("I am in large")
    bd = document.querySelector("body")
    bd.style.fontSize = "3em"
});