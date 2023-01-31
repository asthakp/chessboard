var heading=document.getElementById("player-heading")
var container=document.getElementById("box")
var rotation=0;
var players=document.querySelectorAll(".fa-solid")
console.log(players)


heading.addEventListener("click", ()=>{
    if (heading.innerText=="White"){
        rotation+=180;
        heading.innerText="Black"
        container.style.transform="rotate("+rotation+"deg)" 
        
        players.forEach(piece => {
            piece.style.transform="rotate("+rotation+"deg)"
        });
    
        
    }
    else{
        rotation+=180;
        heading.innerText="White"
        container.style.transform="rotate("+rotation+"deg)"
        
        players.forEach(piece => {
            piece.style.transform="rotate("+rotation+"deg)"
        });
        
        
    }

}
)