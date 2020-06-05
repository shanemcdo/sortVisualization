class BubbleSort {
    constructor() {
        this.i = 0;
        this.j = 1;
        this.cancel = false;
        this.speed = 1000 - speed_slider.value;
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
                if(this.cancel){
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
        reset_coloring();
    }
}
