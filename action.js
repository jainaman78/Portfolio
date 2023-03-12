let a=document.getElementsByClassName('btn');
let b=document.getElementsByClassName('content1');

function tab(arg){
    for(i of a){
        i.classList.remove("active-link");
    }
    for(j of b){
        j.classList.remove("act");
    }
    event.currentTarget.classList.add("active-link");
    let c=document.getElementById(arg);
    c.classList.add("act");

}