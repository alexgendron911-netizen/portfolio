function showAccueil(){


    document.querySelectorAll(".accueil").forEach(quote => {
        quote.style.display = "inline-block";
    });
    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".contact").forEach(quote => {
        quote.style.display = "none";
    });

    document.querySelectorAll(".btnPropos").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnProjets").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnContact").forEach(quote => {
        quote.style.textDecoration = "none";
    });

}

function showPropos(){


    document.querySelectorAll(".accueil").forEach(quote => {
        quote.style.display = "none";
    });
    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "inline-block";
    });
     document.querySelectorAll(".contact").forEach(quote => {
        quote.style.display = "none";
    });


    document.querySelectorAll(".btnPropos").forEach(quote => {
        quote.style.textDecoration = "underline";
    });
    document.querySelectorAll(".btnProjets").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnContact").forEach(quote => {
        quote.style.textDecoration = "none";
    });

}

function showProjets(){



    document.querySelectorAll(".accueil").forEach(quote => {
        quote.style.display = "none";
    });
    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "inline-block";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".contact").forEach(quote => {
        quote.style.display = "none";
    });
    document.querySelectorAll(".btnPropos").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnProjets").forEach(quote => {
        quote.style.textDecoration = "underline";
    });
    document.querySelectorAll(".btnContact").forEach(quote => {
        quote.style.textDecoration = "none";
    });

    
}

function showContact(){



    document.querySelectorAll(".accueil").forEach(quote => {
        quote.style.display = "none";
    });
    document.querySelectorAll(".projet").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".propos").forEach(quote => {
        quote.style.display = "none";
    });
     document.querySelectorAll(".contact").forEach(quote => {
        quote.style.display = "inline-block";
    });


    document.querySelectorAll(".btnPropos").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnProjets").forEach(quote => {
        quote.style.textDecoration = "none";
    });
    document.querySelectorAll(".btnContact").forEach(quote => {
        quote.style.textDecoration = "underline";
    });

    
}