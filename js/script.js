document.querySelectorAll('.card-sideRight-list-question').forEach((item) => {
    item.addEventListener('click',(event) => {
        if(!item.classList.contains("response")){
            item.classList.add("response");
            item.parentNode.classList.toggle("active");
        }
        else{
            item.classList.remove("response");
            item.parentNode.classList.remove("active");//accede al div heredado de si mismo 
        }
    })
})