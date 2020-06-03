var item_heights = [];
var slider = document.getElementById("slider");
var sorter = null;

slider.oninput = function(){
    set_number_of_items(this.value);
}

function randomize_heights(){
    var elements = document.getElementsByClassName("inner_item");
    item_heights = [];
    for (item of elements) {
        random_num = Math.floor(Math.random() * 99) + 1;
        item_heights.push(random_num);
        item.style.height = random_num + "%"
    }
    reset_coloring();
    if(sorter != null){
        sorter.done = true;
    }
}

function update_heights(){
    var elements = document.getElementsByClassName("inner_item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = item_heights[i] + "%"
    }
}

function create_new_item(){
    var container = document.getElementById("container");
    var item = document.createElement("div");
    item.className = "item"
    var inner_item = document.createElement("div");
    inner_item.className = "inner_item"
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

function reset_coloring(){
    var elements = document.getElementsByClassName("inner_item");
    for(item of elements){
        item.style.background = "blue";
    }
}

function swap_sorter(type){
    if(sorter != null){
        if(!sorter.done){
            sorter.done = true;
            randomize_heights();
        }
        if(sorter.type() == type){
            sorter.sort();
        }
    }
    if(type == "bubble"){
        sorter = new BubbleSort()
        sorter.sort();
    }
}

set_number_of_items(10);
