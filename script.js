function changeColor()
{
  color = document.getElementById("colorChoice").value;
  if (color == "blue" || color == "red" || color == "yellow"){
    document.body.style.backgroundColor = color;
  }
}
