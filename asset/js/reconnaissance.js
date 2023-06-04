import data from '../../local.json' assert { type: 'json' };
console.log(data);
async function fill(data) {

  var result = []
  for (var items in data.tools) {
    if (data.tools[items].type == "reconnaissance")
      result.push(data.tools[items])
  }
  console.log(result);
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
  console.log(result);
}
const filled = fill(data)