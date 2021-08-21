// Promo Code
let applied=false;
const applyBtn=document.getElementById("coupn-apply");

// getting best price
const bestPrice=document.getElementById("best-price");

// getting memory and cost
const eightGb=document.getElementById("eight-gb");
const sixteenGb=document.getElementById("sixteen-gb");

const memoryCost=document.getElementById("memory-cost");

// getting storage and cost
const storage256=document.getElementById("256gb");
const storage512=document.getElementById("512gb");
const storage1=document.getElementById("1tb");

const storageCost=document.getElementById("storage-cost");

// getting delivery and cost
const freeDelivery=document.getElementById("free-delivery");
const premiumDelivery=document.getElementById("premium-delivery");

const deliveryCost=document.getElementById("delivery-cost");

// getting total cost
const totalPrice=document.getElementById("total-price");
const total=document.getElementById("total");

// update total
function updateTotal(){
    const memory=Number(memoryCost.innerText);
    const storage=Number(storageCost.innerText);
    const delivery=Number(deliveryCost.innerText);
    const best=Number(bestPrice.innerText)
    const grandTotal=memory+storage+delivery+best;
    totalPrice.innerText=grandTotal;
    total.innerText=grandTotal;
}

// promo code event
applyBtn.addEventListener("click",function(){
    const coupnText=document.getElementById("coupn-text").value;
    if(coupnText=="stevekaku" && applied==false){
        const price=Number(totalPrice.innerText);
        const discount=price-(price*0.20);
        totalPrice.innerText=discount;
        total.innerText=discount;
        applied=true;
    }
});


// memory event
eightGb.addEventListener("click",function(){
    memoryCost.innerText="0";
    updateTotal();
});
sixteenGb.addEventListener("click",function(){
    memoryCost.innerText="180";
    updateTotal()
});

// storage event
storage256.addEventListener("click",function(){
    storageCost.innerText="0";
    updateTotal();
});
storage512.addEventListener("click",function(){
    storageCost.innerText="100";
    updateTotal();
});
storage1.addEventListener("click",function(){
    storageCost.innerText="180";
    updateTotal();
});

// delivery event
freeDelivery.addEventListener("click",function(){
    deliveryCost.innerText="0";
    updateTotal();
});
premiumDelivery.addEventListener("click",function(){
    deliveryCost.innerText="20";
    updateTotal();
});