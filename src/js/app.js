let DonutShop = new donutShop();

const autoCLick = document.getElementById("autoCount")
const donutsPerClick = document.getElementById("donutsPerClick")
const clickText = document.getElementById("clicks")
const costMultiplierText = document.getElementById("multiplierCost")
const clickMultiplierText = document.getElementById("multiplierCount")

function bakeDonuts() 
{
    DonutShop.onClick();
    updateDisplay();
    
}


function hireBakers() 
{
    DonutShop.moreBakers();
    updateDisplay();
    
}



function hireBots() 
{
    console.log("click bot btn");
    DonutShop.moreBots();
    updateDisplay();
    
}







function updateDisplay() 
{
    clickText.innerText = Math.round(DonutShop.clicks);
    costMultiplierText.innerText = DonutShop.multiplierCost;
    clickMultiplierText.innerText = DonutShop.multiplierCount;
    donutsPerClick.innerText = DonutShop.clicksEarned;
    autoCLick.innerText = DonutShop.autoCount;
}


