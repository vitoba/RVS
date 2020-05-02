const backdropping = document.querySelector(".backdrop");
const popup    = document.querySelector(".pop-up");
const button    = document.querySelectorAll(".button");
const button_no    = document.querySelector(".pop-up_no");

for(let item of button){
   item.addEventListener('click',displayAlert); 

} 

button_no.addEventListener('click',closeAlert);
/* backdropping.addEventListener('click',closeAlert); */

function displayAlert(){
    backdropping.style.display = "block";
    popup.style.display = "block";
}

function closeAlert(){
    backdropping.style.display = "none";
    popup.style.display = "none";
}


