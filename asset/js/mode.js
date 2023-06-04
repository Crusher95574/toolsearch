var icon = document.getElementById("icon");
var rasha = document.getElementById("hero-img");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "../asset/image/sunimage.png";
        rasha.src = "../asset/image/rashahacks.jpg";
    } else {
        icon.src = "../asset/image/moon.png";
        rasha.src = "../asset/image/rashahackslight.jpg";
    }
}
