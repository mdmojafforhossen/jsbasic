

// var len = document.querySelectorAll(".myButton").length;

// for(var i=0; i<len; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener('click',function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML= text+" is clicked";
//     });
// }

var len = document.querySelectorAll(".myButton").length;

for(var i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener('click',function(){
        var text = this.innerHTML;
        audioPlay(text);
        playanimat(text);
       
    });
}

function audioPlay(text){
    switch(text){

        case "a":
            var audio = new Audio('audio/1.m4a');
            audio.play();
            break;

            case "b":
            var audio = new Audio('audio/2.m4a');
            audio.play();
            break;

            case "c":
            var audio = new Audio('audio/3.m4a');
            audio.play();
            break;

            case "d":
            var audio = new Audio('audio/4.m4a');
            audio.play();
            break;

            case "e":
            var audio = new Audio('audio/5.m4a');
            audio.play();
            break;

           

    }
}


function playanimat(text){
    var selectedButton = document.querySelector("."+ text);
    selectedButton.classList.add("animat");

    setTimeout(function(){
    selectedButton.classList.remove("animat");

    },1000);
}