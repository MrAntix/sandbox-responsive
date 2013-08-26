
/* page.js - for full height responsive app
*/
(function(win) {

    var doc = win.document,
        page = doc.getElementById("Page"),
        heightMap = {},
        setHeight = function() {
            if (!page) throw "An element with id 'Page' is not found";

            if (win.pageYOffset === undefined) return;

            if (!doc.body)
                win.setTimeout(setHeight, 15);

            else {
                
                var height = win.innerHeight;
                if (heightMap[height]) {

                    page.style.height = heightMap[height];
                    win.setTimeout(function() {
                        win.scrollTo(0, 1);
                    }, 25);
                } else {

                    doc.body.style.marginBottom = "1000px";
                    win.scrollTo(0, 0);

                    win.setTimeout(function() {
                        heightMap[height] = win.innerHeight + "px";
                        page.style.height = heightMap[height];
                        win.scrollTo(0, 1);
                        doc.body.style.marginBottom = "0";
                    }, 250);
                }
            }
        };

    setHeight();

    if (win.addEventListener) win.addEventListener("resize", setHeight, false);
    else win.attachEvent("onresize", setHeight);

})(this);