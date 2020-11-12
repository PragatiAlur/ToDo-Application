const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const span = document.querySelector('span');
var el = document.getElementsByTagName('li');
const Dbtn = document.querySelector("#Dbtn");


btn.addEventListener('click', () => {
    let item = document.getElementById('add-elements').value;
    console.log(item);

    let text = document.createTextNode(item);
    let list = document.createElement("li");
    list.appendChild(text);
    let remove = document.createElement('button');
    remove.style.height = "20px";
    remove.innerHTML = "X";
    remove.style.marginLeft = "20px";
    list.appendChild(remove);

    document.getElementById("list").appendChild(list);
    document.getElementById("add-elements").value = "";

    remove.addEventListener('click', ()=>{
        list.innerText = "";
        console.log(list);
    })
})



Dbtn.onclick = function (ev) {
    list.innerHTML = "";
}

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
};

console.log(list);