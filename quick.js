class QuickSort {
    constructor() {
        // this.speed = 1000 - speed_slider.value
    }

    async sort(low, high){
        if(low >= high){
            return;
        }
        var index = this.partition(low, high);
        this.sort(low, index - 1);
        this.sort(index + 1, high);
        update_heights();
    }

    partition(low, high){
        var pivot = item_heights[high]
        var pivot_index = low;
        for(var i = low; i < high; i++){
            console.log(item_heights);
            console.log(pivot_index);
            if (item_heights[i] < pivot){
                var temp = item_heights[i];
                item_heights[i] = item_heights[pivot_index];
                item_heights[pivot_index] = temp;
                pivot_index++;
            }
        }
        var temp = item_heights[high];
        item_heights[high] = item_heights[pivot_index];
        item_heights[pivot_index] = temp;
        return pivot_index;
    }
}
