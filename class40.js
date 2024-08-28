


// function addst(){
//     document.querySelector("#para").innerHTML="CSS Style Add";
//     document.querySelector("#para").style.color="red";
//     document.querySelector("#para").style.fontSize="30px";
// }
// function remov(){
//     document.querySelector("#para").innerHTML="CSS Style Remove";
//     document.querySelector("#para").style.color="black";
//     document.querySelector("#para").style.fontSize="16px";

// }

function addst(){
    var addstle= document.getElementById("para");
    addstle.classList.add("para-stle");
}
function remov(){
    var remove= document.querySelector("#para");
    remove.classList.remove("para-stle");
}