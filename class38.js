

// var newHeading = document.createElement("h1");
// var text =document.createTextNode("yes im new heading");
// newHeading.appendChild(text);


// var myHeading = document.getElementById("my-div");
// myHeading.appendChild(newHeading);

// var removeH1 = document.getElementsByTagName("h1")[0];
// myHeading.removeChild(removeH1);

// var removeH2 = document.getElementsByTagName("h1")[0];
// myHeading.removeChild(removeH2);
// var photos = ["img/blue.png","img/red.png","img/1.png"];



var photos =["img/1.png","img/blue.png","img/red.png"];
var imgTag =document.querySelector("img");
var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }
}