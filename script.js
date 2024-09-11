function calcTip(bill){
    let Tip;
if(bill>=50 && bill<=300){
    Tip=bill*15/100
}else{
    Tip=bill*20/100
}
const totalvalue=bill+Tip
console.log(`the bill was ${bill}, the Tip was ${Tip}, and the total value is ${totalvalue}`)
 return Tip
}
  
calcTip(800)