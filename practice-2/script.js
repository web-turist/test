/*jshint esversion: 8*/

//Выведение таблицы
document.querySelector('.content').innerHTML = `<table class="table"></table>`;
title = document.createElement('tr');
title.innerHTML = `
    <td>userId</td>
    <td>id</td>
    <td>title</td>
    <td>body</td>
`;
document.querySelector('.table').append(title);

const data = async () => {
const obj = await fetch('https://jsonplaceholder.typicode.com/posts/');
const result = await obj.json();
for (i=0; i<result.length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${result[i]['userId']}</td>
        <td>${result[i]['id']}</td>
        <td>${result[i]['title']}</td>
        <td>${result[i]['body']}</td>
    `;
    document.querySelector('.table').append(row);
}
};

data();

//Поиск в таблице
function searchTable() {
    let input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.querySelector('.table');
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
