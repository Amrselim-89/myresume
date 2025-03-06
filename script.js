

var header = document.querySelector("#jobtitle")
console.log(header)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
//window.lbl.style.color = "blue";
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }


  function changejobtitlecolor() {
   var Colorinput = getRandomColor();
    header.style.color   = Colorinput;
    header.style.fontWeight = "bold";
    header.font
  }

//setInterval("changejobtitlecolor()",500)

var _img  = document.querySelector("#im")
_img.addEventListener('mouseover',function(){
  _img.style.height = "200px";
  _img.style.width = "200px";
    })
var _img  = document.querySelector("#im")

_img.addEventListener('mouseout',function(){
  _img.style.height = "180px";
  _img.style.width = "180px";
    })
    
var _name  = document.querySelector("#hover")
console.log(_name)

_name.addEventListener('mouseover',function(){
_name.style.fontSize = "45px";
})

_name.addEventListener('mouseout',function(){
  _name.style.fontSize = "40px";
  })



function addFrame() {
let img = document.querySelector("#im");
img.style.border = "5px solid";  // Adds a black border as a frame
img.style.borderColor  = getRandomColor();
img.style.padding = "0px";             // Adds padding for spacing
img.style.borderRadius = "100px";        // Optional: Rounds the corners
console.log(document.querySelector("#im"))
}



setInterval("addFrame()",500)
