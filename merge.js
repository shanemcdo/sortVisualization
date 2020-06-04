class MergeSort {
    constructor() {
        this.speed = 1000 - speed_slider.value;
        this.done = false;
    }

    async merge_sort(arr){
        if(arr.length == 1){
            return arr
        }
        var mid= Math.floor(arr.length / 2);
        var l1 = await this.merge_sort(arr.slice(0, mid));
        var l2 = await this.merge_sort(arr.slice(mid, arr.length));
        return this.merge(l1, l2);
    }

    async sort(){
        item_heights = await this.merge_sort(item_heights);
        update_heights();
    }

    merge(l1, l2){
        var new_list = [];
        while(l1.length > 0 || l2.length > 0){
            if(l1.length != 0 && l2.length != 0){
                if(l1[0] > l2[0]){
                    new_list.push(l2.shift());
                } else {
                    new_list.push(l1.shift());
                }
            } else if(l1.length == 0){
                new_list.push(l2.shift());
            } else {
                new_list.push(l1.shift());
            }
        }
        return new_list;
    }
}
