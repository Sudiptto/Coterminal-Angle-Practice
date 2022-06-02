function myFunction(){
    // variables up-top
    let userinput = document.querySelector("#userinput");  // always had #
    let message = document.querySelector("#message");
    let quad = document.querySelector("#quadrant");
    let y = String(userinput.value); 

    function quadrant(x){
        if(x >= 0 && x <= 90) {
            return "Quadrant One!";
        }
        else if(x >= 90 && x <= 180){
            return "Quadrant Two!";
        } 
        else if(x >= 180 && x <= 270) {
            return "Quadrant Three!";
        }
        else if(x >= 270 && x <=360) {
            return "Quadrant Four!";
        }
    }

    if (y.length == parseInt(y).toString().length) {
        let x = parseInt(y);
        if(x <= 360 && x >= 0) { 
            message.innerHTML = "Coterminal Angle: " + x ;
            quad.innerHTML = quadrant(x);
        }
        else if(x < 0){
            while(x < 0) {
                if(x > 0) {
                    break;
                }
                x += 360;
            }
            message.innerHTML = "Coterminal Angle: " + x;
            quad.innerHTML = quadrant(x);
        } else if(x > 360) {
            while(x > 360) {
                if(x < 360) {
                    break;
                }
                x -= 360;
            }
            message.innerHTML = "Coterminal Angle: " + x;
            quad.innerHTML = quadrant(x);
        }
        
    } 

    else {
    alert("Not valid please type a proper number");
    }

}

