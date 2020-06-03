class BubbleSort {
    constructor() {
        this.i = 0;
        this.j = 1;
        this.done = false;
    }

    step() {
        if(item_heights[this.j - 1] > item_heights[this.j]){
            var temp = item_heights[this.j - 1];
            item_heights[this.j - 1] = item_heights[this.j];
            item_heights[this.j] = temp;
        }
        this.j += 1;
        if(this.j >= item_heights.length - this.i){
            this.j = 1;
            this.i += 1;
            if(this.i >= item_heights.length){
                console.log("done");
                this.done = true;
            }
        }
        update_heights();
        this.highlight();
    }

    highlight() {
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        elements[this.j].style.background = "green";
        elements[this.j - 1].style.background = "green";
    }
}
