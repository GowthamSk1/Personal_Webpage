function submitFunction(){
  var myColor = document.getElementById("backgroundColor").value
  if(myColor.toLowerCase() === "red")
  {
      //Element.backgroundColor = "red";
      document.getElementById("BODY").style.backgroundColor = "red";
  }
  else if(myColor.toLowerCase() === "blue")
  {
    document.getElementById("BODY").style.backgroundColor = "blue";
  }
  else if(myColor.toLowerCase() === "yellow")
  {
    document.getElementById("BODY").style.backgroundColor = "yellow";
  }
  else{
    document.getElementById("error").innerHTML = "Error! please enter valid color from the table."
  }
}