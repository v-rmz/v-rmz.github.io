function changeColor()
{
  color = document.getElementById("colorChoice");
  if (color == "blue" || color == "red" || color == "yellow"){
    document.body.style.backgroundColor = color;
  }
}
