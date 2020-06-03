function randomize_heights(){
    var elements = document.getElementsByClassName("inner_item");
    for (item of elements) {
        random_num = Math.floor(Math.random() * 100)
        item.style.height = random_num + "%"
    }
}

randomize();
