var p = document.getElementById("name-version")	

var t = document.getElementById("engine")	


  function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log(ua.indexOf("FBAN") > -1)
    console.log(ua.indexOf("FBAV") > -1)

    p.innerHTML= ua.indexOf("FBAN") > -1
    t.innerHTML= ua.indexOf("FBAV") > -1


    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);

}

isFacebookApp()

