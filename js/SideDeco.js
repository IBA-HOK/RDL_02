link = [
    "./images/SideDeco/SideDeco1.png",
    "./images/SideDeco/SideDeco2.png",
    "./images/SideDeco/SideDeco3.png"
]
var num = link.length;
r = Math.floor(Math.random()*num);
document.write(`<div class="sidefix-deco" ><img class="ha-image image" src=`+`"${link[r]}"`+`></div>`);
