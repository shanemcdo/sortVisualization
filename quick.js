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
        var index = await this.partition(low, high);
        this.sort(low, index - 1);
        this.sort(index + 1, high);
    }

    async partition(low, high){
        // seperate into two seperate lists
        var pivot = item_heights[high]
        var pivot_index = low;
        for(var i = low; i < high; i++){
            if(this.cancel){
                return
            }
            if (item_heights[i] < pivot){
                var temp = item_heights[i];
                item_heights[i] = item_heights[pivot_index];
                item_heights[pivot_index] = temp;
                pivot_index++;
            }
            this.highlight(low, high, i, pivot_index);
            update_heights();
            await sleep(this.speed);
            this.unhighlight(low, high, i, pivot_index)
        }
        var temp = item_heights[high];
        item_heights[high] = item_heights[pivot_index];
        item_heights[pivot_index] = temp;
        return pivot_index;
    }

    highlight(low, high, i, index){
        // highlight selected portions
        var elements = document.getElementsByClassName("inner_item");
        for(var j = low; j < high; j++){
            elements[j].style.background = "cyan";
        }
        elements[i].style.background = "red";
        elements[index].style.background = "green";
    }

    unhighlight(low, high, i, index){
        // unhighlight selected portions
        var elements = document.getElementsByClassName("inner_item");
        for(var j = low; j < high; j++){
            elements[j].style.background = "blue";
        }
        elements[i].style.background = "blue";
        elements[index].style.background = "blue";
    }
}
