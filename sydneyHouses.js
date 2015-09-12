// the function which handles the input field logic
function load() {
    var locations = JSON.parse(data);
}

    function addSuburb(suburb, price) {
        var location = {
            "suburb": suburb,
            "price": price,
        };
        //push location into array
        locations.push(location);
    }
    //add locations

    //build a function that compares user search to array
    function compareSearch(a, b) {
        if (a.price < b.price) {
            return -1;
        }

        if (a.price > b.price) {
            return 1;
        }

        return 0;
    }

function getUserLocation() {
    var locationField = document.getElementById('locationField').value;
    return locationField;
}

function income() {
    var incomeField = document.getElementById('incomeField').value;
    return incomeField;
}

function incomeRecord() {
    var incomeNumber = income();
    var incomeLevel = document.getElementById('incomeLevel');

    incomeLevel.textContent = 'You earn: ' + incomeNumber + ' a year';
}

function locationRecord() {
    var locationPlace = getUserLocation();
    var location = document.getElementById('location');

    location.textContent = 'You want to live in: ' + locationPlace;
}

function housePrice() {
    locations.sort(compareSearch);
    var locationField = document.getElementById("locationField").value.trim();

    for (var i = 0; i < locations.length; i += 1) {
        if (locations[i].price === locationField) {
            var depositNumber = locations[i].suburb;
        }
    }
    return depositNumber;
}

function deposit() {
    var depositNumber = housePrice();
    var depositPrice = depositNumber / 10;
    return depositPrice;
}

function getUserTenPercent() {
    var incomeNumber = income();
    var tenPercent = incomeNumber * (1 / 10);
    return tenPercent;
}

function depositTenth() {
    var depositNumber = deposit();
    var tenPercent = getUserTenPercent();
    var tenth = depositNumber / tenPercent;
    return tenth;
}

function printed() {
    var tenth = depositTenth();
    var depositNumber = deposit();
    var percentages = document.getElementById('percentages');

    percentages.textContent = 'It will take: ' + tenth + ' years to afford a $' + depositNumber + ' deposit, saving 10% of your income';
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', function() {
    incomeRecord();
    locationRecord();
    printed();

});
