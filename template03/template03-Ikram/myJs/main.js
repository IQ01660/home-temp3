var frame = document.querySelector(".frame");
var imgArr = ["myImg/sofa.jpg","myImg/bed.jpg","myImg/table.jpg"];
var newImg = document.createElement("img");
newImg.setAttribute("class","image");
newImg.setAttribute("src",imgArr[0]);
frame.appendChild(newImg);
var index = 0;
function autoSlide() {
    index++;
    if (index == 3) {
        index = 0;
    }
    
    newImg.setAttribute("src",imgArr[index]);
    
}
setInterval(autoSlide,3000);

function upLeft() {
    
    index--;
    if (index==-1) {
        index=2;
    }
    newImg.setAttribute("src",imgArr[index]);
}
function upRight() {
    
    index++;
    if (index==3) {
        index=0;
    }
    newImg.setAttribute("src",imgArr[index]);
}

