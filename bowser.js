var p = document.getElementById("info")	

window.addEventListener("load", function() {
    // PARSE USER AGENT
    var result = bowser.getParser(navigator.userAgent).getResult();
   
    // BROWSER INFO
    console.log(result.browser.name);
    console.log(result.browser.version);
    console.log(result.engine);
   
    // OPERATING SYSTEM
    console.log(result.os.name);
    console.log(result.os.version);
    console.log(result.os.versionName);
   
    // PLATFORM
    console.log(result.platform.type);

    p.innerHTML = (result.browser.name +"\n"+ result.browser.version)
  });


