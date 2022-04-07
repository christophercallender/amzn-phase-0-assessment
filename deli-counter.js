const katzDeli = []

function takeANumber(katzDeli, customer) {
    console.log(`Welcome, ${customer}. You are number ${katzDeli.length + 1} in line.`);
    return katzDeli.push(`${customer}`)
}

function line(katzDeli) {
    const katzDeliMap = katzDeli.map(customer => `${(katzDeli.indexOf(customer) + 1) + '. ' + customer}`);
    katzDeli.length === 0 ? console.log(`The line is currently empty.`) : 
                            console.log(`The line is currently: ${katzDeliMap.toString().replaceAll(',', ' ')}`)
}

function nowServing(katzDeli) {
    katzDeli.length === 0 ? console.log(`There is nobody waiting to be served!`) : 
                            console.log(`Currently serving ${katzDeli[0]}.`);
    return katzDeli.splice(0, 1)
}

takeANumber(katzDeli, 'Ada')    //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, 'Grace')  //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, 'Kent')   //=> Welcome, Kent. You are number 3 in line.
line(katzDeli)                  //=> The line is currently: 1. Ada 2. Grace 3. Kent
nowServing(katzDeli)            //=> Currently serving Ada.
line(katzDeli)                  //=> The line is currently: 1. Grace 2. Kent
takeANumber(katzDeli, 'Matz')   //=> Welcome, Matz. You are number 3 in line.
line(katzDeli)                  //=> The line is currently: 1. Grace 2. Kent 3. Matz
nowServing(katzDeli)            //=> Currently serving Grace.
line(katzDeli)                  //=> The line is currently: 1. Kent 2. Matz