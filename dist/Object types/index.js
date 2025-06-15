"use strict";
const returnUserDisplay = document.querySelector('#returning-user');
const userNmeDisplay = document.querySelector('#user');
const reviwTotalDisplay = document.querySelector('#reviews');
let isOpn;
const reviws = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function showReviwTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
showReviwTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const yours = {
    firstName: 'Prisca',
    lastName: 'Masereli',
    age: 20,
    isReturning: true
};
function poplateUser(isReturning, firstName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = firstName;
}
poplateUser(you.isReturning, you.firstName);
//# sourceMappingURL=index.js.map