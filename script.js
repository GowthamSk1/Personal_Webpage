function submitFunction(){
  var myColor = document.getElementById("backgroundColor").value
  if(myColor.toLowerCase() === "red")
  {
      //Element.backgroundColor = "red";
      document.getElementById("BODY").style.backgroundColor = "red";
      document.body.style.background= "red";
  }
  else if(myColor.toLowerCase() === "blue")
  {
    document.getElementById("BODY").style.backgroundColor = "blue";
    document.body.style.background= "blue";
  }
  else if(myColor.toLowerCase() === "yellow")
  {
    document.getElementById("BODY").style.backgroundColor = "yellow";
    document.body.style.background= "yellow";
  }
  else{
    document.getElementById("error").innerHTML = "Error! please enter valid color from the table."
  }
}