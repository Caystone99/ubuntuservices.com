
function menu(){
    var a = document.getElementById("drop-btn");
    var b = document.getElementById("dropdown-menu");
    
    if (b.style.display == "" || b.style.display =="none"){
        b.style.display = "block";
    }
    else {
        b.style.display = "none";
    }

}
