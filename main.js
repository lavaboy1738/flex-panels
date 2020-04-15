const panels = document.querySelectorAll(".panel");
let opened = null;

for(panel of panels){
    panel.addEventListener("mouseover", hover)
    panel.addEventListener("mouseout", hover)
    panel.addEventListener("click", open)
}

function open(e){
    if(e.target.classList.contains("open")){
        e.target.classList.toggle("open")
        opened = null;
    }else{
        if(opened === null){
            e.target.classList.toggle("open")
            opened = e.target
        }else{
            opened.classList.toggle("open")
            e.target.classList.toggle("open")
            opened = e.target
        }
    }
    //below is the old method, which involves a loop.
    // let parentEl = e.target.parentElement;
    // for (panel of parentEl.children){
    //     if(panel.classList.contains("open")&&panel.classList.contains("panel")&&!panel.classList.contains("hover")){
    //         panel.classList.toggle("open")
    //     }
    // }
}

function hover(e){
    e.target.classList.toggle("hover")
}

