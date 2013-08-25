
/* page.js - for full height responsive app
    with thanks, https://github.com/scottjehl/Hide-Address-Bar
*/
(function(win) {

    var doc = win.document,
        page = doc.getElementById("Page");

    var setHeight = function() {
        page.style.height = "150%";
        win.setTimeout(function() {
            page.style.height = (win.innerHeight ? win.innerHeight : doc.documentElement.clientHeight) + "px";
        }, 0);
    };

    if (win.addEventListener) {
        var getScrollTop = function() {
            return win.pageYOffset
                || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop
                || doc.body.scrollTop
                || 0;
            },
            hideAddress = function() {

                win.scrollTo(0, 1);
                var scrollTop = 1,
                    bodycheck = win.setInterval(function() {
                        if (doc.body) {
                            clearInterval(bodycheck);
                            scrollTop = getScrollTop();
                            win.scrollTo(0, scrollTop === 1 ? 0 : 1);
                        }
                    }, 15);
            };

        hideAddress();

        win.addEventListener("resize", setHeight, false);
        win.addEventListener("orientationchange", hideAddress, false);

    } else win.attachEvent("onresize", setHeight);

    setHeight();

})(this);