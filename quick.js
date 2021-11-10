class QuickSort {
    constructor() {
        this.speed = 1000 - speed_slider.value
        this.cancel = false;
    }

    async sort(low, high){
        // perform quick sort
        if(low >= high || this.cancel){
            update_heights();
            return;
        }
        let index = await this.partition(low, high);
        this.sort(low, index - 1);
        this.sort(index + 1, high);
    }

    async partition(low, high){
        // seperate into two seperate lists
        let pivot = item_heights[high]
        let pivot_index = low;
        for(let i = low; i < high; i++){
            if(this.cancel){
                return
            }
            if (item_heights[i] < pivot){
                let temp = item_heights[i];
                item_heights[i] = item_heights[pivot_index];
                item_heights[pivot_index] = temp;
                pivot_index++;
            }
            this.highlight(low, high, i, pivot_index);
            update_heights();
            await sleep(this.speed);
            this.unhighlight(low, high, i, pivot_index)
        }
        let temp = item_heights[high];
        item_heights[high] = item_heights[pivot_index];
        item_heights[pivot_index] = temp;
        return pivot_index;
    }

    highlight(low, high, i, index){
        // highlight selected portions
        for(let j = low; j < high; j++){
            inner_items[j].style.background = colors.FOCUSED;
        }
        inner_items[i].style.background = colors.SELECTED;
        inner_items[index].style.background = colors.SELECTED2;
    }

    unhighlight(low, high, i, index){
        // unhighlight selected portions
        let inner_items = document.getElementsByClassName("inner_item");
        for(let j = low; j < high; j++){
            inner_items[j].style.background = colors.NORMAL;
        }
        inner_items[i].style.background = colors.NORMAL;
        inner_items[index].style.background = colors.NORMAL;
    }
}
