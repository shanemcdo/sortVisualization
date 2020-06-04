class QuickSort {
    constructor() {
        this.speed = 1000 - speed_slider.value
        this.done = false;
    }

    async sort(low, high){
        if(low >= high){
            update_heights();
            reset_coloring();
            return;
        }
        var index = await this.partition(low, high);
        this.sort(low, index - 1);
        this.sort(index + 1, high);
    }

    async partition(low, high){
        var pivot = item_heights[high]
        var pivot_index = low;
        for(var i = low; i < high; i++){
            if (item_heights[i] < pivot){
                var temp = item_heights[i];
                item_heights[i] = item_heights[pivot_index];
                item_heights[pivot_index] = temp;
                pivot_index++;
            }
            this.highlight(low, high, i, pivot_index);
            update_heights();
            await sleep(this.speed);
        }
        var temp = item_heights[high];
        item_heights[high] = item_heights[pivot_index];
        item_heights[pivot_index] = temp;
        return pivot_index;
    }

    highlight(low, high, i, index){
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        for(var j = low; j < high; j++){
            elements[j].style.background = "cyan";
        }
        elements[i].style.background = "red";
        elements[index].style.background = "green";
    }
}
