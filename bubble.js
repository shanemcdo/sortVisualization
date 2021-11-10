class BubbleSort {
    constructor() {
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
    }

    highlight(j) {
        // color the two inputs being compared
        reset_coloring();
        inner_items[j].style.background = colors.SELECTED;
        inner_items[j - 1].style.background = colors.SELECTED;
    }

    async sort(){
        // perform bubble sort
        for(let i = 0; i < item_heights.length; i++){
            for(let j = 1; j < item_heights.length - i; j++){
                if(this.cancel){
                    return;
                }
                if(item_heights[j - 1] > item_heights[j]){
                    let temp = item_heights[j - 1];
                    item_heights[j - 1] = item_heights[j];
                    item_heights[j] = temp;
                }
                update_heights();
                this.highlight(j);
                await sleep(this.speed);
            }
        }
        reset_coloring();
    }
}
