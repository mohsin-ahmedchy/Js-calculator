let btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let clearBtn = document.querySelector(".btn-clear");
let equalBtn = document.querySelector(".btn-equal");


for(let x = 0 ; x < btn.length ; x++ ){
    btn[x].addEventListener("click",()=>{
        let input = btn[x].getAttribute("data-num");
        screen.value = screen.value + input;
    })
}

equalBtn.addEventListener("click",()=>{
    if(screen.value === " "){
        alert("Empty");
    }
    else{
        let value = eval(screen.value);
        screen.value = value;
    }
})

clearBtn.addEventListener("click",()=>{
    screen.value = " ";
})