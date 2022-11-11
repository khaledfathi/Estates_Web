/*---global var---*/
const navList = document.querySelector("#navList"); 
const queries = document.querySelector("#queries"); 
const transaction = document.querySelector("#transaction"); 
const waterInvoice = document.querySelector("#waterInvoice"); 
const registers = document.querySelector("#registers"); 
const receiptRelease = document.querySelector("#receiptRelease"); 

/*---NAV---*/

/*events functions*/
function navShowHideSection(itemNumber){
    if (itemNumber != undefined){
        itemNumber = 1 << itemNumber-1;//convert to 1 bit 
        let state=[];
        for (let i=0; i<5; i++){
            ( 1 & (itemNumber >> i) ) ? state[i]="block" : state[i]="none" ;
        }
        queries.style.setProperty("display" ,state[0]);
        transaction.style.setProperty("display" ,state[1]);
        waterInvoice.style.setProperty("display" ,state[2]);
        registers.style.setProperty("display" ,state[3]);    
        receiptRelease.style.setProperty("display" ,state[4]);
    } 
}

function navSelectedStyle(itemNumber){
    if (itemNumber != undefined){
        itemNumber = 1 << itemNumber-1;//convert to 1 bit 
        let state=[];        
        for (let i=0; i<7; i++){
            navList.children[i].classList.remove("navItemSelected" , "navItemUnselected");
            ( 1 & (itemNumber >> i) ) ? 
                navList.children[i].classList.add("navItemSelected"):
                navList.children[i].classList.add("navItemUnselected");                    
        }        
    }
}

/*events*/
navList.addEventListener('click', (event)=>{     
    navShowHideSection(event.target.value);
    navSelectedStyle(event.target.value);
}); 

/**********************/