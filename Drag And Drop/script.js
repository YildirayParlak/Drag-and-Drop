let boxes = document.querySelectorAll(".box");
let leftDiv = document.querySelector("#left");
let rightDiv = document.querySelector("#right");



for(box of boxes){
    box.addEventListener("dragstart",function(e){
        let selected = e.target;

        rightDiv.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightDiv.addEventListener("drop",function(e){
            rightDiv.appendChild(selected);
            selected =null;
        });


        leftDiv.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftDiv.addEventListener("drop",function(e){
            leftDiv.appendChild(selected);
            selected =null;
        });
        
    });
};