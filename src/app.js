let setUpToolTip=function(){
    let tooltip="",
    toolTipDiv=document.querySelector(".div-tooltip"),
    toolTipElements=Array.from(document.querySelectorAll(".hover-reveal"));

    let displayTooltip=function(e,obj){
        tooltip=obj.dataset.tooltip;
        toolTipDiv.innerHTML=tooltip;
        toolTipDiv.style.top=e.pageY+"px";
        toolTipDiv.style.left=e.pageY+"px";
        toolTipDiv.style.opacity=1;
    };
    toolTipElements.forEach(function(elem){
        elem.addEventListener("mouseenter",function(e){
            displayTooltip(e,this);
        })
    })
};
setUpToolTip();