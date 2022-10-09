const panels = document.querySelectorAll('.panel');
const panels2 = document.querySelectorAll('.panel');
const actives=document.querySelectorAll('.active');

panels.forEach(function(panel){
    panel.addEventListener('click',function(){
        if(panel.classList.contains('active'))
        removeActiveClass();
        else
        {
            removeActiveClass();
            panel.classList.add('active');

        }
        
    })

})




function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    });
}



