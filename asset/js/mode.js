var icon = document.getElementById("icon");
var rasha = document.getElementById("hero-img");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../image/sunimage.png";
        rasha.src = "../asset/image/rashahacks.jpg";
    } else {
        icon.src = "../image/moon.png";
        rasha.src = "../image/rashahackslight.jpg";
    }
}
