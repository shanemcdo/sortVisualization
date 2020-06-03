class BubbleSort {
    constructor() {
        this.i = 0;
        this.j = 1;
    }

    step() {
        if(item_heights[this.j - 1] > item_heights[this.j]){
            var temp = item_heights[this.j - 1];
            item_heights[this.j - 1] = item_heights[this.j];
            item_heights[this.j] = temp;
        }
        this.j += 1;
        if(this.j >= item_heights.length - this.i){
            this.j = 0;
            this.i += 1;
        }
        update_heights();
    }
}
