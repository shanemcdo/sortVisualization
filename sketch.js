function randomize_heights(){
    var elements = document.getElementsByClassName("inner_item");
    for (item of elements) {
        random_num = Math.floor(Math.random() * 96) + 4
        item.style.height = random_num + "%"
    }
}

function create_new_item(){
    var container = document.getElementById("container");
    var item = document.createElement("div");
    item.className = "item"
    var inner_item = document.createElement("div");
    inner_item.className = "inner_item"
    inner_item.innerHTML = "4";
    item.appendChild(inner_item);
    container.appendChild(item);
}

function remove_item(){
    var container = document.getElementById("container");
    var elements = document.getElementsByClassName("item");
    elements[elements.length - 1].remove();
}

randomize_heights();
