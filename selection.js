class SelectionSort {

    constructor(){
        this.cancel = false;
        this.speed = 1000- speed_slider.value;
    }

    highlight(j, min_index, sorted_to) {
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        elements[min_index].style.background = "green";
        elements[j].style.background = "red";
        for(let i = 0; i < sorted_to; i++){
            elements[i].style.background = "cyan";
        }
    }

    async sort() {
        for(let i = 0; i < item_heights.length; i++){
            let min_val = 1000;
            let min_index;
            for(let j = i; j < item_heights.length; j++){
                if(this.cancel){
                    return;
                }
                if(min_val > item_heights[j]){
                    min_val = item_heights[j];
                    min_index = j;
                }
                this.highlight(j, min_index, i);
                await sleep(this.speed);
            }
            item_heights.splice(min_index, 1);
            item_heights.splice(i, 0, min_val);
            update_heights(0, 0, i);
            await sleep(this.speed);
        }
    }
    
}
