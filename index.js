let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count =0

function increment(){
    count=count+1
    countEl.innerText=count
}

function save(){
    let countstr= count + " - "
    saveEl.textContent+=countstr
    count=0
    countEl.innerText=count
}
