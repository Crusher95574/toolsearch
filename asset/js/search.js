import data from '../../local.json' assert { type: 'json' };
console.log(data);
async function search(data) {

    var form = document.getElementById('myForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        search = document.getElementById('search').value.toLowerCase();
        console.log(search);
        var f = 0
        var result = [];
        for (var items in data.tools) {
            if (data.tools[items].name == search) {
                result.push(data.tools[items])
                f += 1;
                console.log(result);
            }
            document.getElementById("card").innerHTML = result.map((items) =>
                `
        <div class="card">
        <div class="content">        
          <a target="_blank" href="${items.url}"><h3>${items.name}</h3></a>
        <p>${items.description}</p>
       
        
        <p>${items.language}</p>
        <p id="tt">${items.stargazers_count}⭐</p>
        </div>
      </div>
        `).join("");

        }
        if (f == 0) {
            fetch("https://api.github.com/search/repositories?q={" + search + "}{&page,per_page,sort,order")
                .then((result) => result.json())
                .then((data) => {
                    console.log(data);

                    var k = data.items[0].full_name
                    document.getElementById("result").innerHTML = `
            <a target="_blank" href="https://github.com/${k}">${k}</a>
            `
                })
        }
    })
}
const searchResults = search(data)
