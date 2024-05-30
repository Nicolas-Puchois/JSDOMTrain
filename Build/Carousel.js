let count = 0;
function carousel() {

    let red = document.querySelector(".red");
    let green = document.querySelector(".green");
    let blue = document.querySelector(".blue");
    let purple = document.querySelector(".purple");
    

    
        if (count == 0) {
            red.setAttribute("class", "slide red inactive");
            green.setAttribute("class", "slide green active");                   
            return count = 1;
            
        } else if (count == 1) {
            green.setAttribute("class", "slide green inactive");
            blue.setAttribute("class", "slide blue active");  
            return count = 2;
            
        } else if (count == 2) {
            blue.setAttribute("class", "slide blue inactive");
            purple.setAttribute("class", "slide purple active");  
            return count = 3;
            
        } else if (count == 3) {
            green.setAttribute("class", "slide purple inactive");
            blue.setAttribute("class", "slide red active");  
            return count = 0;
           
        }
        
        document.getElementById('next').addEventListener('click',carousel());
}