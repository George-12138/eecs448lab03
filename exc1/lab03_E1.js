main= function () {
  var x = document.getElementById("password").value;
  var y = document.getElementById("confirm").value;
  var z;
  //
  if(x.length < 8) {
    z = "False!!!  the passwords are not at least 8 characters long ";
  }
  else if (x != y) {
    z = "False!!!  the passwords entered don't match ";
  }
  else if (x === y){
    z = "log-in-succeed";
  }
  document.getElementById("printing").innerHTML = z;
}
