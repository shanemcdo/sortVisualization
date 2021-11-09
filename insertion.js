class InsertionSort {
    constructor(){
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
    }

    highlight(j){
        // color the two inputs being compared
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        for(let i = 0; i < j-1; i++)
            elements[i].style.background = colors.FOCUSED;
        elements[j].style.background = colors.SELECTED;
        elements[j - 1].style.background = colors.SELECTED;
    }

    async sort() {
        for(let i = 1; i < item_heights.length; i++){
            for(let j = i; j > 0; j--){
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
