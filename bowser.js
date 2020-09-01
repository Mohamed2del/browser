var p = document.getElementById("name-version")	

var t = document.getElementById("engine")	


  function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    

    p.innerHTML= ua.indexOf("FBAN") > -1
    t.innerHTML= ua.indexOf("FBAV") > -1


    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);

}

let x = isFacebookApp()


if (x == false){
 document.getElementById("popup").style.display = "none"
}

