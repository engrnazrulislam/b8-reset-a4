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

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        const numArray = [];
        for (let arr of array) {
            if (typeof (arr) == 'number' && isNaN(arr) === false) {
                numArray.push(arr);
            }
        }
        return numArray;
    } else {
        return "Invalid Array!!! You must provide input as an Array";
    }
}

function password(obj) {
    const keyArray = [];
    for (let key in obj) {
        keyArray.push(key);
    }
    if (keyArray[0] === 'name' && keyArray[1] === 'birthYear' && keyArray[2] === 'siteName') {
        if (obj[keyArray[1]] <= 9999 && obj[keyArray[1]] > 999) {
            return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
        }
        else {
            return "Invalid";
        }
    } else {
        return "Invalid";
    }
}

function monthlySavings(payment, livingCost) {
    if (Array.isArray(payment) === true && typeof (livingCost) === 'number') {
        let totalPayment = 0;
        let totalDiscount = 0;
        for (let pay of payment) {
            if (pay >= 3000) {
                totalDiscount = totalDiscount + pay * 0.20;
            }
            totalPayment = totalPayment + pay;
        }
        const totalCost = livingCost + totalDiscount;
        const totalSaving = totalPayment - totalCost;
        if (totalSaving <= 0) {
            return "earn more";
        } else {
            return totalSaving;
        }
    }else{
        return "Invalid Input";
    }
}
