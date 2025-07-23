let a = document.querySelector("#hirebutton");

a.addEventListener("click",function(){
    document.querySelector(".form-bg").style.display = "block";
});


a.addEventListener("click",function(){
    document.querySelector("#form-box").style.display = "block";
});


let b = document.querySelector("#closebtn");

b.addEventListener("click",function(){
    document.querySelector(".form-bg").style.display = "none";
});

b.addEventListener("click",function(){
    document.querySelector("#form-box").style.display = "none";
});

let c = document.querySelector(".ri-menu-2-line");

c.addEventListener("click",function(){
    document.querySelector("#nav-phone").style.display = "block";
});


c.addEventListener("click",function(){
    document.querySelector(".form-bg").style.display = "block";
});



let d = document.querySelector("#closebtn2");

d.addEventListener("click",function(){
    document.querySelector("#nav-phone").style.display = "none";
});


d.addEventListener("click",function(){
    document.querySelector(".form-bg").style.display = "none";
});
