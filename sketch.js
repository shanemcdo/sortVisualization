let inner_items = document.getElementsByClassName("inner_item");
let item_heights = [];
let size_slider = document.getElementById("size_slider");
let speed_slider = document.getElementById("speed_slider");
let sorter = new BubbleSort();

size_slider.oninput = function(){
    set_number_of_items(this.value);
}

speed_slider.oninput = function(){
    sorter.speed = 1000 - this.value
}

function randomize_heights(){
    // randomize the heights
    item_heights = [];
    for (item of inner_items) {
        random_num = Math.floor(Math.random() * 99) + 1;
        item_heights.push(random_num);
        item.style.height = random_num + "%"
    }
    reset_coloring();
    sorter.cancel = true;
}

function update_heights(){
    // set heights equal to item_heights
    for (let i = 0; i < inner_items.length; i++) {
        inner_items[i].style.height = item_heights[i] + "%"
    }
}

function create_new_item(){
    // create new item
    let container = document.getElementById("container");
    let item = document.createElement("div");
    item.className = "item"
    let inner_item = document.createElement("div");
    inner_item.className = "inner_item"
    item.appendChild(inner_item);
    container.appendChild(item);
}

function remove_item(){
    // remove the last item in the array
    let items = document.getElementsByClassName("item");
    items[items.length - 1].remove();
}

function set_number_of_items(num){
    // use create_new_item and remove_item to set the number of items to a set number
    let items = document.getElementsByClassName("item");
    let len = items.length;
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
    for(item of inner_items){
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
    } else if(type == "insertion"){
        sorter = new InsertionSort();
        sorter.sort();
    } else if(type == "radix"){
        sorter = new RadixSort();
        sorter.sort();
    }
}

function sleep(milliseconds){
    // sleep for inputed number of milliseconds
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

set_number_of_items(10);
