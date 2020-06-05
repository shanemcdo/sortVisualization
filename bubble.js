class BubbleSort {
    constructor() {
        this.i = 0;
        this.j = 1;
        this.done = false;
        this.speed = 1000 - speed_slider.value;
    }

    step() {
        if(item_heights[this.j - 1] > item_heights[this.j]){
            var temp = item_heights[this.j - 1];
            item_heights[this.j - 1] = item_heights[this.j];
            item_heights[this.j] = temp;
        }
        this.j += 1;
        if(this.j >= item_heights.length - this.i){
            this.j = 1;
            this.i += 1;
            if(this.i >= item_heights.length){
                this.done = true;
            }
        }
        update_heights();
        this.highlight();
    }

    highlight(j) {
        reset_coloring();
        var elements = document.getElementsByClassName("inner_item");
        elements[j].style.background = "red";
        elements[j - 1].style.background = "red";
    }

    async sort(){
        for(let i = 0; i < item_heights.length; i++){
            for(let j = 1; j < item_heights.length - i; j++){
                if(this.done){
                    return;
                }
                if(item_heights[j - 1] > item_heights[j]){
                    var temp = item_heights[j - 1];
                    item_heights[j - 1] = item_heights[j];
                    item_heights[j] = temp;
                }
                update_heights();
                this.highlight(j);
                await sleep(this.speed);
            }
        }
        this.done = false;
        reset_coloring();
    }
}
