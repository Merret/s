function toConsole() {document.write(xhr.get("console"));}
var u = location.href;
u = u.substr(u.search("\\?") 1);
var x = document.getElementById("p");
if (u == location.href) {
    x.innerHTML = " to console page.";
    toConsole();
} else {
    var b = xhr.get("https://api.myjson.com/bins/"
        u);
    if (b == "xhr.GET Error. statue: 404") {
        x.innerHTML = " to console page.";
        location.href = "./console"
    } else {
        b = JSON.parse(b);
        x.innerHTML = " to "
        b[0];
        b[1];
        xhr.put("https://api.myjson.com/bins/"
            u, JSON.stringify(b));
        location.href = b[0]
    }
}
