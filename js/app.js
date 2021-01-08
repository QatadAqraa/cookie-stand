'use strict';

var hoursArry = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am',
 '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var locationArr = []

function City(name, minCustomerHourly, maxCustomerHourly, avgCookiePerCustomer) {
    this.name = name;
    this.minCustomerHourly = minCustomerHourly;
    this.maxCustomerHourly = maxCustomerHourly;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.avgCookiePerHourlyArry = [];
    this.minmaxPerCookieArry = [];
    this.total=0;
    locationArr.push(this)
}

City.prototype.random = function () {
    this.minCustomerHourly = Math.ceil(this.minCustomerHourly);
    this.maxCustomerHourly = Math.floor(this.maxCustomerHourly);
    return Math.floor(Math.random() * (this.maxCustomerHourly - this.minCustomerHourly + 1) + this.minCustomerHourly);
},
City.prototype.calcAvgCookiePerHourly = function () {
    for (let index = 0; index < hoursArry.length; index++) {
        this.avgCookiePerHourlyArry[index] = Math.floor(this.random() * this.avgCookiePerCustomer);
    }
}
City.prototype.claCtotal = function(){
    for (let index= 0; index < this.avgCookiePerHourlyArry.length; index++) {
        this.total = this.total + this.avgCookiePerHourlyArry[index];         
    }
}

var parentElement = document.getElementById("salmoncookies");
var form = document.getElementById('SalmonCookiesForm');

var table = document.createElement('table');
parentElement.appendChild(table);

var tableFirstRow = document.createElement('tr');
table.appendChild(tableFirstRow);

City.prototype.renderHeader = function () {

    var headerOne = document.createElement('th');
    headerOne.textContent = '';
    tableFirstRow.appendChild(headerOne);
    
    for (var index = 0; index < hoursArry.length; index++) {
        var headerTwo = document.createElement('th');
        headerTwo.textContent = hoursArry[index];
        tableFirstRow.appendChild(headerTwo);
    }

    var headerThree = document.createElement('th');
    headerThree.textContent = 'Daily Location Total';
    tableFirstRow.appendChild(headerThree);
}

City.prototype.renderBody = function () {

    var tableSecondRow = document.createElement('tr');
    table.appendChild(tableSecondRow);
    
    for (var index = 0; index < 1; index++) {
        var dataCellOne = document.createElement('td');
        dataCellOne.textContent = this.name;
        tableSecondRow.appendChild(dataCellOne);
    }
    
    for (var index = 0; index < hoursArry.length; index++) {
        var dataCellTwo = document.createElement('td');
        dataCellTwo.textContent = this.avgCookiePerHourlyArry[index];
        tableSecondRow.appendChild(dataCellTwo);
    }
    var dataCellThree = document.createElement('td');
    dataCellThree.textContent = this.total;
    tableSecondRow.appendChild(dataCellThree);
}
function renderTotal(){

    var tableFinalRow = document.createElement('tr');
    table.appendChild(tableFinalRow);

    var dataCellFour = document.createElement('td');
    dataCellFour.textContent = 'Totals';
    tableFinalRow.appendChild(dataCellFour);
    
    var finalTotal = 0 ;
    for (var index = 0; index < hoursArry.length; index++) {
        var totalCityPerHour = 0;
        var hourDataCell = document.createElement('td');
        
        for (var j = 0; j < locationArr.length; j++) {
            totalCityPerHour+=locationArr[j].avgCookiePerHourlyArry[index]; 
        }
        hourDataCell.textContent = totalCityPerHour;
        tableFinalRow.appendChild(hourDataCell);
        finalTotal += totalCityPerHour;
    }
    var totalDataCell = document.createElement('td');
    totalDataCell.textContent = finalTotal;
    tableFinalRow.appendChild(totalDataCell);
}



var Seattle = new City('Seattle', 23, 65, 6.3);

var Tokyo = new City('Tokyo', 3, 24, 1.2);

var Dubai = new City('Dubai', 11, 38, 3.7);

var Paris = new City('Paris', 20, 38 ,2.3);

var Lima = new City('Lima', 2, 16, 4.6);

Seattle.calcAvgCookiePerHourly();
Tokyo.calcAvgCookiePerHourly();
Dubai.calcAvgCookiePerHourly();
Paris.calcAvgCookiePerHourly();
Lima.calcAvgCookiePerHourly();

Seattle.claCtotal();
Tokyo.claCtotal();
Dubai.claCtotal();
Paris.claCtotal();
Lima.claCtotal();

Seattle.renderHeader();

Seattle.renderBody();
Tokyo.renderBody();
Dubai.renderBody();
Paris.renderBody();
Lima.renderBody();

renderTotal(); 

// var SalmonCookiesForm = document.getElementById('SalmonCookiesForm');
// debugger
// SalmonCookiesForm.addEventListener('submit', function (event){

//     event.preventDefault();

//     var cityName = event.target.name.value;
//     var minCusHr = parseInt(event.target.minCustomerHourly.value);
//     var maxCusHr = parseInt(event.target.maxCustomerHourly.value);
//     var avgCookiePerCus = parseFloat(event.target.avgCookiePerCustomer.value);

//     var newCity = new City(cityName, minCusHr, maxCusHr, avgCookiePerCus);
//     newCity.calcAvgCookiePerHourly();
//     newCity.claCtotal();
//     newCity.renderBody();
//     console.log(newCity);
// });

function addCity(event) {
    event.preventDefault();
    var cityName = event.target.name.value;
    var minCusHr = parseInt(event.target.minCustomerHourly.value);
    var maxCusHr = parseInt(event.target.maxCustomerHourly.value);
    var avgCookiePerCus = parseFloat(event.target.avgCookiePerCustomer.value);

    var newCity = new City(cityName, minCusHr , maxCusHr, avgCookiePerCus);
    newCity.calcAvgCookiePerHourly();
    newCity.claCtotal();
    newCity.renderBody();
    renderTotal();

}

form.addEventListener('submit', addCity);










