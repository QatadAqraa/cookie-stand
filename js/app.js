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

var Salmon = {
    img: 'salmon.png',
};

var SalmonImg = document.createElement('img');
SalmonImg.setAttribute('src', 'img/' + Salmon.img);
article.appendChild(SalmonImg);

var par = document.createElement('p');
par.textContent = Seattle.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Seattle.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Seattle.hoursArry[index] + " : " + Seattle.avgCookiePerHourlyArry[index] + " cookies ";
    list.appendChild(listItem);
}

var Tokyo = {
    minCustomerHourly: 3,
    maxCustomerHourly: 24,
    avgCookiePerCustomer: 1.2,
    name: 'Tokyo',
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
Tokyo.calcAvgCookiePerHourly();

var par = document.createElement('p');
par.textContent = Tokyo.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Tokyo.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Tokyo.hoursArry[index] + " : " + Tokyo.avgCookiePerHourlyArry[index] + " cookies ";
    list.appendChild(listItem);
}

var Dubai = {
    minCustomerHourly: 11,
    maxCustomerHourly: 38,
    avgCookiePerCustomer: 3.7,
    name: 'Dubai',
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
Dubai.calcAvgCookiePerHourly();

var par = document.createElement('p');
par.textContent = Dubai.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Dubai.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Dubai.hoursArry[index] + " : " + Dubai.avgCookiePerHourlyArry[index] + " cookies ";
    list.appendChild(listItem);
}

var Paris = {
    minCustomerHourly: 20,
    maxCustomerHourly: 38,
    avgCookiePerCustomer: 2.3,
    name: 'Paris',
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
Paris.calcAvgCookiePerHourly();

var par = document.createElement('p');
par.textContent = Paris.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Paris.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Paris.hoursArry[index] + " : " + Paris.avgCookiePerHourlyArry[index] + " cookies ";
    list.appendChild(listItem);
}

var Lima = {
    minCustomerHourly: 2,
    maxCustomerHourly: 16,
    avgCookiePerCustomer: 4.6,
    name: 'Lima',
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
Lima.calcAvgCookiePerHourly();

var par = document.createElement('p');
par.textContent = Lima.name
article.appendChild(par);

var list = document.createElement('ul');
article.appendChild(list);

for (var index = 0; index < Lima.hoursArry.length; index++) {
    var listItem = document.createElement('li');
    listItem.textContent = Lima.hoursArry[index] + " : " + Lima.avgCookiePerHourlyArry[index] + " cookies ";
    list.appendChild(listItem);
}