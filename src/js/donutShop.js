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
        this.multiplierCost = 2;
        this.autoCost = 10
        this.clicksEarned = 1;
        this.autoLoopID = undefined;
  
    }

    
  
    
   autoClick = () => 
   {
     for(let i = 0; i < this.autoCount; i++){
         this.onClick();
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
    if (this.clicks >= this.autoCost) {
        // purchase - take away money
         this.clicks -= this.autoCost;
        // increase the mutliplier count
         console.log("AutoAdded " + this.autoCount++);
         //this.autoCount++;
        // recalculate the clicksEarned
         this.startLoop();
         //this.clicksEarned = Math.pow(1.2, COUNTOFMULTIPLIER)
         //this.autoCount = Math.pow(1.2,this.autoCost)
    } 

}

   
   onClick() {
        console.log("clicks: " + this.clicks);
        this.clicks += this.clicksEarned; // (1.2)^multCount

       
        
    }

    moreBakers() {
        //verify they have money/donuts
        if (this.clicks >= this.multiplierCost) {
            // purchase - take away money
             this.clicks -= this.multiplierCost
            // increase the mutliplier count
             console.log("added " + this.multiplierCount++)
            // recalculate the clicksEarned

            //this.clicksEarned = Math.pow(1.2, COUNTOFMULTIPLIER)
            this.clicksEarned = Math.pow(1.2,this.multiplierCount)
            //increase cost of mutliplier
            this.multiplierCost = Math.round(this.multiplierCost * 1.50);

            
            
        } 
   
    }

    }
