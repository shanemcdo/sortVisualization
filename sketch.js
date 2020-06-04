var item_heights = [];
var size_slider = document.getElementById("size_slider");
var speed_slider = document.getElementById("speed_slider");
var sorter = new BubbleSort();

size_slider.oninput = function(){
    set_number_of_items(this.value);
}

speed_slider.oninput = function(){
    sorter.speed = 1000 - this.value
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
    sorter.done = true;
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
    if(!sorter.done){
        randomize_heights();
    }
    if(type == "bubble"){
        sorter = new BubbleSort();
        sorter.sort();
    } else if(type == "quick"){
        sorter = new QuickSort();
        sorter.sort(0, item_heights.length - 1);
    } else if(type == "merge"){
        sorter = new MergeSort();
        sorter.sort();
    }
}

function sleep(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
set_number_of_items(10);
