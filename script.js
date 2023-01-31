var heading=document.getElementById("player-heading")
var container=document.getElementById("box")
var rotation=0;


heading.addEventListener("click", ()=>{
    console.log(rotation)
    if (heading.innerText=="White"){
        rotation+=180;
        heading.innerText="Black"
        container.style.transform="rotate("+rotation+"deg)" 
        
    }
    else{
        rotation+=180;
        heading.innerText="White"
        container.style.transform="rotate("+rotation+"deg)"
        
    }

}
)