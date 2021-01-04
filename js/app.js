'use strict';

var hoursArry = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function City(
    name, minCustomerHourly, maxCustomerHourly, avgCookiePerCustomer) {
    this.name = name;
    this.minCustomerHourly = minCustomerHourly;
    this.maxCustomerHourly = maxCustomerHourly;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    
    this.avgCookiePerHourlyArry = [];
    this.minmaxPerCookieArry = [];
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

var parentElement = document.getElementById("salmoncookies");
 
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

Seattle.renderHeader();
Seattle.renderBody();
Tokyo.renderBody();
Dubai.renderBody();
Paris.renderBody();
Lima.renderBody();
