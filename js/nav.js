// make nav
function makeNav(id, title) {
    if(typeof title === "undefined"){
        title = id;
    }

    document.getElementById(id).innerHTML =
        '<div class="left-box">\
                <a href="http://iamht.ml" title="Back to the Main Page">\
                    <img src="../images/IamHTML.png" width="64" height="64" />\
                </a>\
            </div>\
            <div class="center-box">\
                <h2>' + title + '</h2>\
            </div>\
            <div class="right-box"></div>';

    document.title = title + " - IamHTML:)";
}
