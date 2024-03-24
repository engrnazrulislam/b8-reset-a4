//Problem-01
function calculateMoney(ticketSale) {
    if (typeof (ticketSale) === "number") {
        if (ticketSale >= 0) {
            const ticketPrice = 120;
            const totalCost = 500 + 8 * 50;
            const totalTicketSale = ticketSale * ticketPrice;
            const totalIncome = totalTicketSale - totalCost;
            return totalIncome;
        } else {
            return "Invalid Input!! Negative input isn't supported."
        }
    } else {
        return "Invalid Input!! You must provide number as an input.";
    }
}
//Problem-02
function checkName(name) {
    if (typeof (name) === 'string') {
        const len = name.length;
        if (name[len - 1].toLocaleLowerCase() === 'a' || name[len - 1].toLocaleLowerCase() === 'y' || name[len - 1].toLocaleLowerCase() === 'i' || name[len - 1].toLocaleLowerCase() === 'e' || name[len - 1].toLocaleLowerCase() === 'o' || name[len - 1].toLocaleLowerCase() === 'u' || name[len - 1].toLocaleLowerCase() === 'w') {
            return "Good Name";
        } else {
            return "Bad Name"
        }
    } else {
        return "Invalid";
    }
}
//Problem-03
function deleteInvalids(array){
    if(Array.isArray(array)){
        const numArray=[];
        const othArray=[];
        let element=0;
        for(let arr of array){
            if(arr!=='NaN'||arr!=='undefined'){
                numArray.push(arr);
            }else{
                othArray.push(arr);
            }
        }
        return numArray;
    }else{
        return "Invalid Array";
    }
}
const arrayElement=[10,11,-1,54,NaN,undefined];
const output=deleteInvalids(arrayElement);
console.log(output);