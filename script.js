
function test(){



    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "block";
    });

}

function test2(){



    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "block";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "none";
    });


    
}