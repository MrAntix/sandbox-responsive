
/* page.js - for full height responsive app
*/
(function(win) {

    var doc = win.document,
        page = doc.getElementById("Page"),
        setHeight = function () {
            if (!doc.body) return;
            
            doc.body.style.marginBottom = "1000px";
            win.scrollTo(0, 1);
            page.style.height = (win.innerHeight ? win.innerHeight : doc.documentElement.clientHeight) + "px";
            doc.body.style.marginBottom = "0";

            var id = win.setInterval(function() {
                if (doc.body) {
                    clearInterval(id);
                    win.scrollTo(0, 0);
                }
            }, 15);
        };
    
    setHeight();

    if (win.addEventListener) win.addEventListener("resize", setHeight, false);
    else win.attachEvent("onresize", setHeight);

})(this);