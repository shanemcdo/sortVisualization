class RadixSort {
    constructor(){
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
        this.base = 3;
   }

    log(x){
        return Math.log(x) / Math.log(this.base);
    }

    highlight(mod, divisor){
        var elements = document.getElementsByClassName("inner_item");
        for(let i = 0; i < elements.length; i++)
            elements[i].style.background = `hsl(${Math.floor(item_heights[i] % mod / divisor) * 360 / this.base}, 100%, 50%)`;
    }

    async sort(){
        const size = item_heights.length;
        let buckets = [];
        for(let i = 0; i < this.base; i++) // create buckets
            buckets.push([]); // add empty bucket
        let highest_power = Math.max(...item_heights.map(x => Math.floor(this.log(x)))) + 1;
        for(let i = 0; i < highest_power; i++){
            let divisor = this.base ** i // the power of the current base
            let mod = this.base ** (i + 1) // one more than the power of the current base
            for(let height of item_heights)
                buckets[Math.floor(height % mod / divisor)].push(height);
            let idx = 0;
            for(let i = 0; i < buckets.length; i++)
                while(buckets[i].length > 0)
                    item_heights[idx++] = buckets[i].shift();
            update_heights();
            this.highlight(mod, divisor);
            await sleep(this.speed);
         }
        reset_coloring();
    }
}
