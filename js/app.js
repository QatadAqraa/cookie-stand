'use strict';

var Seattle = {
    minCustomerHourly: 23,
    maxCustomerHourly: 65,
    avgCookiePerCustomer: 6.3,
    name: 'Seattle',
    hoursArry: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    avgCookiePerHourlyArry: [],

    minmaxPerCookieArry: [],

    random: function () {
        this.minCustomerHourly = Math.ceil(this.minCustomerHourly);
        this.maxCustomerHourly = Math.floor(this.maxCustomerHourly);
        return Math.floor(Math.random() * (this.maxCustomerHourly - this.minCustomerHourly + 1) + this.minCustomerHourly);
    },
    calcAvgCookiePerHourly: function () {
        for (let index = 0; index < this.hoursArry.length; index++) {
            this.avgCookiePerHourlyArry[index] = Math.floor(this.random() * this.avgCookiePerCustomer);  
        }
    }
}
Seattle.calcAvgCookiePerHourly();

var parentElement = document.getElementById("salmoncookies");

var article = document.createElement('article');
parentElement.appendChild(article);

var par = document.createElement('p');
par.textContent = Seattle.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Seattle.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Seattle.hoursArry[index]+" : "+Seattle.avgCookiePerHourlyArry[index];
    list.appendChild(listItem);
}




Seattle.calcAvgCookiePerHourly();





// var Tokyo = {
//     minhourly: 3,
//     maxhourly: 24,
//     avgcookie: 1.2, 
// }

// var Dubai = {
//     minhourly: 11,
//     maxhourly: 38,
//     avgcookie: 3.7, 
// }

// var Paris = {
//     minhourly: 20,
//     maxhourly: 38,
//     avgcookie: 2.3, 
// }

// var Lima = {
//     minhourly: 2,
//     maxhourly: 16,
//     avgcookie: 4.6, 
// }'