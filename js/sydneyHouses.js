var i;
// Prepare an empty array to store the results
var locations = [];
// $.getJSON() is a wrapper for $.ajax(), and it returns a deffered jQuery object
var deferred = $.getJSON('data/suburbs_list.json');

deferred.done(function (suburbs_list) {
    // Any code placed here will be executed if the $.getJSON() method
    // was completed successfully.
    for ( i = 0 ; i < suburbs_list.length ; i++ ) {
        locations.push({ 
            suburb: suburbs_list[i].Suburb, 
            price: suburbs_list[i].Cost,
            state: suburbs_list[i].State,
            source: suburbs_list[i].Source,
            postcode: suburbs_list[i].Postcode
        });
    }
});



//build a function that compares user search to array
function compareSearch(a, b) {
    if (a.suburb < b.suburb) {
        return -1;
    }

    if (a.suburb > b.suburb) {
        return 1;
    }

    return 0;
}



function sourceRecord() {
    locations.sort(compareSearch);
    var suburbField = document.getElementById("suburbField").value.trim();
    var stateField = document.getElementById("stateField").value.trim();

    for (var i = 0; i < locations.length; i += 1) {
        if ((locations[i].suburb === suburbField) && (locations[i].state === stateField)) {
            var sourceRecord = locations[i].source;
        }
    }
        var sourced = document.getElementById('sourced');

    sourced.textContent = sourceRecord;  
}


function housePrice() {
    locations.sort(compareSearch);
    var suburbField = document.getElementById("suburbField").value.trim();
    var stateField = document.getElementById("stateField").value.trim();

    for (var i = 0; i < locations.length; i += 1) {
        if ((locations[i].suburb === suburbField) && (locations[i].state === stateField)) {
            var housingNumber = locations[i].price;
        }
    }
    return housingNumber;
}


function housePriceRecord() {
    var houseCost = housePrice();
    var location = getUserLocation();
    var price = document.getElementById('price');

    if ( houseCost > 0 ) {
        price.textContent = '$' + houseCost; 
    } else {
        price.textContent = '';
        alert("There have been less than 20 sales for houses in this suburb in the past fortnight.");
    }
}


function getUserLocation() {
    var suburbField = document.getElementById('suburbField').value;
    return suburbField;
}

function getUserIncome() {
    var incomeField = document.getElementById('incomeField').value;

        // psuedo
        // tax = (income - untaxed) * percentage
        // posttaxincome = income - tax

    if (incomeField <= 18200) {
        var postTax = incomeField;
    } else if (incomeField >= 18201 && incomeField <= 37000) {
        var unTaxed = 18200;
        var tax = (incomeField - unTaxed) * (19/100) ;
        var postTaxIncome = incomeField - tax;
        var postTax = postTaxIncome;

    } else if (incomeField >= 37001 && incomeField <= 80000) {
        var min = 3572;
        var floor = 37000;
        var tax = ((incomeField - floor) * 32.5/100) + min;
        var postTaxIncome = incomeField - tax;
        var postTax = postTaxIncome;   
     } else if (incomeField >= 80001 && incomeField <= 180000) {
        var min = 17547;
        var floor = 80000;
        var tax = ((incomeField - floor) * 37/100) + min;
        var postTaxIncome = incomeField - tax;
        var postTax = postTaxIncome;  
     } else {
        var min = 54547;
        var floor = 180000;
        var tax = ((incomeField - floor) * 45/100) + min;
        var postTaxIncome = incomeField - tax;
        var postTax = postTaxIncome;  
     }
    return postTax;
}



function incomeRecord() {
    var incomeNumber = getUserIncome();
    var incomeLevel = document.getElementById('incomeLevel');

    incomeLevel.textContent = 'You earn: $' + incomeNumber + ' a year';
}

function deposit() {
    var house = housePrice();
    var depositPrice = house / 20;
    return depositPrice;
}

function depositRecord() {
    var depositNumber = deposit();
    var depositPrice = document.getElementById('depositPrice');

    if ( depositNumber > 0 ) {
        depositPrice.textContent = '$' + depositNumber
    } else {
        depositPrice.textContent = '';
    }
}

function getUserTenPercent() {
    var incomeNumber = getUserIncome();
    var tenPercent = incomeNumber * (1 / 10);
    return tenPercent;
}


function depositTenth() {
    var depositNumber = deposit();
    var tenPercent = getUserTenPercent();
    var input = depositNumber / tenPercent;
    var tenth = Math.round(input*10)/10;
    return tenth;
}

function printTen() {
    var tenth = depositTenth();
    var twntyth = depositTwentyPercent();
    var tenpercent = document.getElementById('tenpercent');

    if (tenth > 0) {
    tenpercent.textContent =  tenth + ' years';
    } else {
    tenpercent.textContent =  '';
    }
}

function getUserTwentyPercent() {
var incomeNumber = getUserIncome();
var twentyPercent = incomeNumber * (2 / 10);
return twentyPercent;
}
function depositTwentyPercent() {
var depositNumber = deposit();
var twentyPercent = getUserTwentyPercent();
var input = depositNumber / twentyPercent;
var twntyP = Math.round(input*10)/10;
return twntyP;
}
function printTwenty() {
var twntyth = depositTwentyPercent();
var twentypercent = document.getElementById('twentypercent');
    if (twntyth > 0) {
    twentypercent.textContent =  twntyth + ' years';
    } else {
    twentypercent.textContent =  '';
    }
}
function getUserThirtyPercent() {
var incomeNumber = getUserIncome();
var thirtyPercent = incomeNumber * (3 / 10);
return thirtyPercent;
}
function depositThirtyPercent() {
var depositNumber = deposit();
var thirtyPercent = getUserThirtyPercent();
var input = depositNumber / thirtyPercent;
var thrtyP = Math.round(input*10)/10;
return thrtyP;
}
function printThirty() {
var thrtyth = depositThirtyPercent();
var thirtypercent = document.getElementById('thirtypercent');
    if (thrtyth > 0) {
    thirtypercent.textContent =  thrtyth + ' years';
    } else {
    thirtypercent.textContent =  '';
    }
}

function getUserFourtyPercent() {
var incomeNumber = getUserIncome();
var fourtyPercent = incomeNumber * (4 / 10);
return fourtyPercent;
}
function depositFortyPercent() {
var depositNumber = deposit();
var fourtyPercent = getUserFourtyPercent();
var input = depositNumber / fourtyPercent;
var fiftyP = Math.round(input*10)/10;
return fiftyP;
}
function printForty() {
var fortyth = depositFortyPercent();
var fourtypercent = document.getElementById('fourtypercent');
    if (fortyth > 0) {
    fourtypercent.textContent =  fortyth + ' years';
    } else {
    fourtypercent.textContent =  '';
    }
}

function getUserFiftyPercent() {
var incomeNumber = getUserIncome();
var fiftyPercent = incomeNumber * (5 / 10);
return fiftyPercent;
}
function depositFiftyPercent() {
var depositNumber = deposit();
var fiftyPercent = getUserFiftyPercent();
var input = depositNumber / fiftyPercent;
var fiftyP = Math.round(input*10)/10;
return fiftyP;
}
function printFifty() {
var fftyth = depositFiftyPercent();
var fiftypercent = document.getElementById('fiftypercent');
    if (fftyth > 0) {
    fiftypercent.textContent =  fftyth + ' years';
    } else {
    fiftypercent.textContent =  '';
    }
}

function getUserSixtyPercent() {
var incomeNumber = getUserIncome();
var sixtyPercent = incomeNumber * (6 / 10);
return sixtyPercent;
}
function depositSixtyPercent() {
var depositNumber = deposit();
var sixtyPercent = getUserSixtyPercent();
var input = depositNumber / sixtyPercent;
var sixtyP = Math.round(input*10)/10;
return sixtyP;
}
function printSixty() {
var sxtyth = depositSixtyPercent();
var sixtypercent = document.getElementById('sixtypercent');
    if (sxtyth > 0) {
    sixtypercent.textContent =  sxtyth + ' years';
    } else {
    sixtypercent.textContent =  '';
    }
}


function getUserSeventyPercent() {
var incomeNumber = getUserIncome();
var seventyPercent = incomeNumber * (7 / 10);
return seventyPercent;
}

function depositSeventyPercent() { 
var depositNumber = deposit();
var seventyPercent = getUserSeventyPercent();
var input = depositNumber / seventyPercent;
var seventyP = Math.round(input*10)/10;
return seventyP;
}


function printSeventy() {
var svntyth = depositEightyPercent(); 
var seventypercent = document.getElementById('seventypercent');
    if (svntyth > 0) {
    seventypercent.textContent =  svntyth + ' years';
    } else {
    seventypercent.textContent =  '';
    }
}

function getUserEightyPercent() {
var incomeNumber = getUserIncome();
var eightyPercent = incomeNumber * (8 / 10);
return eightyPercent;
}
function depositEightyPercent() {
var depositNumber = deposit();
var eightyPercent = getUserEightyPercent();
var input = depositNumber / eightyPercent;
var eightyP = Math.round(input*10)/10;
return eightyP;
}
function printEighty() {
var eytyth = depositEightyPercent();
var eightypercent = document.getElementById('eightypercent');
    if (eytyth > 0) {
    eightypercent.textContent =  eytyth + ' years';
    } else {
    eightypercent.textContent =  '';
    }
}
