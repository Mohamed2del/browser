var p = document.getElementById("name-version")	

var t = document.getElementById("engine")	


  function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    

    p.innerHTML= ua.indexOf("FBAN") > -1
    t.innerHTML= ua.indexOf("FBAV") > -1


    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);

}

isFacebookApp()
console.log(isFacebookApp())

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

if (isFacebookApp == true){
  alert("Hello! I am an alert box!!");
}