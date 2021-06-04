let active = false;
//Solo sirve para abrir una opcion y cerrar esa opcion cuando abra otra opcion. No cierra la misma opcion si clickeas de nuevo
document.querySelectorAll('.card-sideRight-list-question').forEach((item) => {
    item.addEventListener('click', (event) => {
        if (!active) {
            item.classList.add("response");
            item.parentNode.classList.toggle("active");
            active = true
        }
        else {
            active = false
            document.querySelectorAll('.card-sideRight-list-question').forEach((itm) => {
                if (itm.classList.contains("response") && itm.classList === item.classList) {
                    itm.classList.remove("response");
                    itm.parentNode.classList.remove("active");//accede al div heredado de si mismo       
                }
                if (itm.classList.contains("response") && itm.classList !== item.classList) {
                    itm.classList.remove("response");
                    itm.parentNode.classList.remove("active");//accede al div heredado de si mismo 
                    item.classList.add("response");
                    item.parentNode.classList.toggle("active");
                }
            })
            
        }
    })
});
