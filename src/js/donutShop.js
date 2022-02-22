class donutShop {
    constructor() {
        // count = clicks
        // mutliplier count = clickMultiplier
        // autoclicker count =autoClicks
        // multiplier cost = multiplierCost
        // autocclicker cost =autoCost
        // earned per click = clicksEarned
        // interval id for autoclicker

        this.clicks = 0;
        this.multiplierCount = 0;
        this.autoCount = 0;
        this.multiplierCost = 1;
        this.autoCost = 5
        this.clicksEarned = 1;
        this.autoLoopID = undefined;
  
    }

    
  
    
    
   autoClick = () => 
   {
     for(let i = 0; i < this.autoCount; i++){
         this.onClick();
         updateDisplay();
     }
   }

   startLoop()
   {
        if(this.autoLoopID == undefined) {
           this.autoLoopID = setInterval(this.autoClick,1000);
        }
   }


   moreBots() {
       console.log('money: ' + this.clicks + "cost" + this.autoCost);
    //verify they have money/donuts
    if (this.clicks >= this.autoCost) 
    { 
        // purchase - take away money
         this.clicks -= this.autoCost;
        // increase the mutliplier count
         console.log("AutoAdded " + this.autoCount++);
        // recalculate the clicksEarned
         this.startLoop();
         //this.clicksEarned = Math.pow(1.2, COUNTOFMULTIPLIER)
         this.autoCost = Math.pow(1.5,this.autoCount);
         updateDisplay();

    } else if
    (this.clicks < this.autoCost)
    {alert("😅 You didnt have enough.😅");}

}

   
   onClick() {
        console.log("clicks: " + this.clicks);
        this.clicks += this.clicksEarned; // (1.2)^multCount
        updateDisplay();

       
        
    }

    moreBakers() {
        //verify they have money/donuts
        if (this.clicks >= this.multiplierCost) {
            // purchase - take away money
             this.clicks -= this.multiplierCost;
            // increase the mutliplier count
             console.log("added " + this.multiplierCount++)
            // recalculate the clicksEarned

            //this.clicksEarned = Math.pow(1.2, COUNTOFMULTIPLIER)
            this.clicksEarned = Math.pow(2,this.multiplierCount);
            //increase cost of mutliplier
            this.multiplierCost = Math.pow(1.5,this.multiplierCount);
            updateDisplay();   
        } else if
        (this.clicks < this.multiplierCost)
        {alert("😅 You didn't have enough.😅");}

    }

    }
