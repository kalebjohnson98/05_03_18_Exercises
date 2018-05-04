"use strict";
const buttonClick = document.getElementsByTagName("button");
buttonClick[0].addEventListener("click", () => {
    const newPara = document.createElement("p");
    const text = document.createTextNode("You did it!");
    newPara.appendChild(text);
    document.body.appendChild(newPara);
});
const linkHover = document.getElementsByTagName("a");
linkHover[0].addEventListener("mouseover", () => {
    linkHover[0].style.color="pink";
});
const resizeText = document.getElementsByTagName("p");
window.addEventListener("resize", ()=>{
    resizeText[0].style.fontSize="100px";
})