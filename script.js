function changeColor(color)
{
  color = document.getElementById("colorChoice").value;
  if (color == "blue" || color == "red" || color == "yellow"){
    document.body.style.background = color;
  }
}
