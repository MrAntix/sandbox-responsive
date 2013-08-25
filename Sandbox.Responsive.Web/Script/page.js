
/* page.js - for full height responsive app
*/
(function(win) {

    var doc = win.document,
        page = doc.getElementById("Page"),
        setHeight = function() {
            if (!win.innerHeight) return;

            if (!doc.body)
                win.setTimeout(setHeight, 15);
            
            else {
                
                doc.body.style.marginBottom = "1000px";
                win.scrollTo(0, 1);
                page.style.height = win.innerHeight + "px";
                doc.body.style.marginBottom = "0";
                win.scrollTo(0, 0);
            }
        };
    
    setHeight();

    if (win.addEventListener) win.addEventListener("resize", setHeight, false);
    else win.attachEvent("onresize", setHeight);

})(this);