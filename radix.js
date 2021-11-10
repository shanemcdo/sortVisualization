class RadixSort {
    constructor(){
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
        this.base = 2;
   }

    log(x){
        return Math.log(x) / Math.log(this.base);
    }

    highlight(a, b, power_index){
        var elements = document.getElementsByClassName("inner_item");
        for(let i = 0; i < elements.length; i++)
            elements[i].style.background = '';
        elements[a].style.background = `hsl(${power_index * 360 / this.base}, 100%, 50%)`;
        elements[b].style.background = `hsl(${power_index * 360 / this.base}, 100%, 50%)`;
    }

    swap_arr(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    async sort(){
        const size = item_heights.length;
        let highest_power = Math.max(...item_heights.map(x => Math.floor(this.log(x)))) + 1;
        for(let i = 0; i < highest_power; i++){
            let divisor = this.base ** i // the power of the current base
            let mod = this.base ** (i + 1) // one more than the power of the current base
            for(let j = 0; j < size; j++){
                for(let k = j; k > 0; k--){
                    update_heights();
                    this.highlight(k, k-1, mod, divisor);
                    await sleep(this.speed);
                    if(Math.floor(item_heights[k - 1] % mod / divisor) > Math.floor(item_heights[k] % mod / divisor))
                        this.swap_arr(item_heights, k, k - 1);
                }
            }
         }
        reset_coloring();
    }
}
