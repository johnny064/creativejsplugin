// selecting the text Area

var inputValue = document.getElementById("textArea");


const inputBtn = document.getElementById("inputBtn");


inputBtn.addEventListener("click", function(){
    console.log(inputValue.value);
    inputValue.value = "";
})
