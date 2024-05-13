"use strict";

onload = function getSize() 
{
  let w =this.documentElement.clientwidth;
  let h =this.documentElement.clientHeigth;
  this.document.getElementByid('wh').linnerHTML = "<h1> width: " 
  = w + "<br />" + "Height" + h + "</h1>"
  window.addEventListener('resize',getSize);
}
