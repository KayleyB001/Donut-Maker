let DonutShop = new donutShop();

const costAutoText = document.getElementById("autoCost")
const autoCLick = document.getElementById("autoCount")
const donutsPerClick = document.getElementById("donutsPerClick")
const clickText = document.getElementById("clicks")
const costMultiplierText = document.getElementById("multiplierCost")
const clickMultiplierText = document.getElementById("multiplierCount")

/*window.onload = function () {
    var name = prompt("Name your donutshop!");
    
    var space = document.getElementById("name");
    
    space.innerHTML = name + "'s Bakery"}*/


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
    costAutoText.innerText = DonutShop.autoCost;
    clickText.innerText = DonutShop.clicks;
    costMultiplierText.innerText = DonutShop.multiplierCost;
    clickMultiplierText.innerText = DonutShop.multiplierCount;
    donutsPerClick.innerText = DonutShop.clicksEarned;
    autoCLick.innerText = DonutShop.autoCount;
    clicks.innerText = DonutShop.autoCount;

    costAutoText.innerText = Math.round(DonutShop.autoCost);
    costMultiplierText.innerText = Math.round(DonutShop.multiplierCost);
    clickText.innerText = Math.round(DonutShop.clicks);
    donutsPerClick.innerText = Math.round(DonutShop.clicksEarned);
    autoCLick.innerText = Math.round(DonutShop.autoCount);

}


