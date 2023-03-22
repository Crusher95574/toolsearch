var form = document.getElementById('myForm');





form.addEventListener('submit', function (e) {
    e.preventDefault();

    var search = document.getElementById("search").value
    search = search.split('').join('')
    fetch("https://api.github.com/search/repositories?q={" + search + "}{&page,per_page,sort,order")
        .then((result) => result.json())
        .then((data) => {
            k = data.items[0].full_name
            document.getElementById("result").innerHTML = `
            <a href="https://github.com/${k}">${k}</a>)
            `
        })
})