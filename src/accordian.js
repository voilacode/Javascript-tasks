const accordian=document.querySelectorAll(".accordion");


accordian.forEach(item => {
    const title=item.querySelector(".title");
    const  content=item.querySelector(".content");

     title.addEventListener('click',()=>{
        for(var i=0;i<accordian.length;i++){
            if(accordian[i]!=item){
                accordian[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
        
     })
});