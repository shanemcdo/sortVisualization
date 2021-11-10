class InsertionSort {
    constructor(){
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
    }

    highlight(j){
        // color the two inputs being compared
        reset_coloring();
        for(let i = 0; i < j-1; i++)
            inner_items[i].style.background = colors.FOCUSED;
        inner_items[j].style.background = colors.SELECTED;
        inner_items[j - 1].style.background = colors.SELECTED;
    }

    async sort() {
        for(let i = 1; i < item_heights.length; i++){
            for(let j = i; j > 0; j--){
                if(this.cancel)
                    return
                if(item_heights[j] < item_heights[j - 1]){
                    let temp = item_heights[j - 1];
                    item_heights[j - 1] = item_heights[j];
                    item_heights[j] = temp;
                } else {
                    break;
                }
                update_heights();
                this.highlight(j);
                await sleep(this.speed);
            }
        }
        reset_coloring();
    }
}
