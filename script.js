

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
  
  
  
  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }


  function changejobtitlecolor() {
   var Colorinput = getRandomColor();
    header.style.color   = Colorinput;
    header.style.fontWeight = "bold";
    header.font
  }

setInterval("changejobtitlecolor()",500)