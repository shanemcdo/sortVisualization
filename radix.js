class RadixSort {
    constructor(){
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
        this.base = 10;
    }

    log(x){
        return Math.log(x) / Math.log(this.base);
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
                buckets[height % mod / divisor].push(height);
            let idx = 0;
            for(let i = 0; i < buckets.length; i++)
                while(buckets[i].length > 0)
                    item_heights[idx++] = buckets[i].shift();
            update_heights();
            await sleep(this.speed);
            break;
         }
        reset_coloring();
    }
}
