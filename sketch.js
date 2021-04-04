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
    // randomize the heights
    var elements = document.getElementsByClassName("inner_item");
    item_heights = [];
    for (item of elements) {
        random_num = Math.floor(Math.random() * 99) + 1;
        item_heights.push(random_num);
        item.style.height = random_num + "%"
    }
    reset_coloring();
    sorter.cancel = true;
}

function update_heights(){
    // set heights equal to item_heights
    var elements = document.getElementsByClassName("inner_item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = item_heights[i] + "%"
    }
}

function create_new_item(){
    // create new item
    var container = document.getElementById("container");
    var item = document.createElement("div");
    item.className = "item"
    var inner_item = document.createElement("div");
    inner_item.className = "inner_item"
    item.appendChild(inner_item);
    container.appendChild(item);
}

function remove_item(){
    // remove the last item in the array
    var elements = document.getElementsByClassName("item");
    elements[elements.length - 1].remove();
}

function set_number_of_items(num){
    // use create_new_item and remove_item to set the number of items to a set number
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
    // rest the coloring of all of the items back to blue
    var elements = document.getElementsByClassName("inner_item");
    for(item of elements){
        item.style.background = colors.NORMAL;
    }
}

function swap_sorter(type){
    // set the sorter based on the string input
    // TODO: refactor
    if(!sorter.cancel){
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
    } else if(type == "selection"){
        sorter = new SelectionSort();
        sorter.sort();
    }
}

function sleep(milliseconds){
    // sleep for inputed number of milliseconds
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

set_number_of_items(10);
