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
    var elements = document.getElementsByClassName("item");
    elements[elements.length - 1].remove();
}

function set_number_of_items(num){
    var elements = document.getElementsByClassName("item");
    var len = elements.length;
    while(num < len){
        remove_item();
        len -= 1;
    }
    while(num > len){
        create_new_item();
        len += 1;
    }
    randomize_heights();
}

randomize_heights();
