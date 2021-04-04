class MergeSort {
    constructor() {
        this.speed = 1000 - speed_slider.value;
        this.cancel = false;
    }

    async sort(low = 0, high = item_heights.length){
        // perform merge sort
        if (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            await this.sort(low, mid);
            await this.sort(mid, high);
            await this.merge(low, mid, high);
        }
        reset_coloring();
    }

    async merge(low, mid, high){
        // merge two sections
        const left = item_heights.slice(low, mid);
        const right = item_heights.slice(mid, high);
        for (let l = 0, r = 0, i = low; i < high; i++) {
            if(this.cancel){
                return;
            }
            if (l >= left.length) {
                item_heights[i] = right[r++];
            } else if (r >= right.length) {
                item_heights[i] = left[l++];
            } else if (left[l] < right[r]) {
                item_heights[i] = left[l++];
            } else {
                item_heights[i] = right[r++];
            }
            this.highlight(low, high, i);
            update_heights();
            await sleep(this.speed);
        }
    }

    highlight(low, high, i){
        // highlight the selected sections
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        for(var j = low; j < high; j++){
            elements[j].style.background = colors.FOCUSED
        }
        elements[i].style.background = colors.SELECTED
    }
}
