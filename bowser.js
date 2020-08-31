var p = document.getElementById("name-version")	
var engine = document.getElementById("engine")	
var os = document.getElementById("os")	
var platform = document.getElementById("info")	

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
    console.log(result.userAgent)

    p.innerHTML = ("Browser Name : "+result.browser.name +" -- \n VERSION : "+ result.browser.version);
    engine.innerHTML = ("engine : "+result.browser.engine);
    os.innerHTML = ("os Name : "+result.os.name +" -- \n os version : "+ result.os.version+"VersionName"+ result.os.versionName)
    platform.innerHTML = ("os Name : "+result.platform.type);

  });


