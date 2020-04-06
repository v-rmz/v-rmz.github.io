function changeColor()
{
  color = document.getElementById("colorChoice").value;
  // if (color == "yellow"){
  //   document.body.style.backgroundColor = Yellow;
  // }
  // if (color == "blue"){
  //   document.body.style.backgroundColor = Blue;
  // }
  //
  // if (color == "red"){
  //   document.body.style.backgroundColor = Red;
  // }
 if (color == "blue" || color == "red" || color == "yellow"){
    document.body.style.backgroundColor = color;
  }
}
