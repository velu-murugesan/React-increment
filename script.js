const inputfield=document.getElementById("input-field");
const button=document.getElementById("btn");
const listgroup=document.getElementById("list-group");

function todofunc(){
    if(inputfield.value.trim() === ''){
        alert("please must fill the section");
    }
    else{
        const li =document.createElement("li");
        li.innerHTML = inputfield.value;
        listgroup.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        span.addEventListener("click", () =>{
          span.parentElement.remove();

        },false);
    }
    inputfield.value="";
}


