// Visa land i sök bar

let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let inputfield = document.getElementById("inputfield");

let options = document.getElementsByClassName("options");

select.onclick = function() {
    list.classList.toggle("open");
}
    for(option of options) {
        option.onclick = function(){
            selectText.innerHTML = this.innerHTML;
            inputfield.placeholder = "Sök i " + selectText.innerHTML;
        }
    }    


// Kategori menyer

let clickbuttonone = document.querySelector('.clickbuttonone');
let listone = document.querySelector('.listone');
clickbuttonone.addEventListener("click",()=>{
    listone.classList.toggle('newlist');
});

let clickbuttontwo = document.querySelector('.clickbuttontwo');
let listtwo = document.querySelector('.listtwo');
clickbuttontwo.addEventListener("click",()=>{
listtwo.classList.toggle('newlist');
});

let clickbuttonthree = document.querySelector('.clickbuttonthree');
let listthree = document.querySelector('.listthree');
clickbuttonthree.addEventListener("click",()=>{
    listthree.classList.toggle('newlist');
});

let clickbuttonfour = document.querySelector('.clickbuttonfour');
let listfour = document.querySelector('.listfour');
clickbuttonfour.addEventListener("click",()=>{
    listfour.classList.toggle('newlist');
});

let clickbuttonfive = document.querySelector('.clickbuttonfive');
let listfive = document.querySelector('.listfive');
clickbuttonfive.addEventListener("click",()=>{
    listfive.classList.toggle('newlist');
});

let clickbuttonsix = document.querySelector('.clickbuttonsix');
let listsix = document.querySelector('.listsix');
clickbuttonsix.addEventListener("click",()=>{
    listsix.classList.toggle('newlist');
});