import data from '../../local.json' assert { type: 'json' };
console.log(data);
async function fill(data) {

    console.log(data);

    document.getElementById("tbody").innerHTML = data.tools
        .map(
            (tool) =>
                `<tr>
                    <td>${tool.name}</td>
                    <td>${tool.description}</td>
                    <td>${tool.stargazers_count}⭐</td>
                    <td>${tool.language}</td>
                    <td><a target="_blank" href="${tool.url}">link</a></td>                                       
                    <td>${tool.updated_at}</td>
                </tr >`
        )
        .join("");
}
const filled = fill(data)