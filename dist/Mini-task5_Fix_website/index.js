"use strict";
const returningUser = document.querySelector('#returning-user');
const userName = document.querySelector('#user');
const TotalDisplay = document.querySelector('#reviews');
const revie = [
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
function ReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'Review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
ReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const mine = {
    userName: 'Prisca',
    isReturning: true,
};
function popUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
popUser(mine.isReturning, mine.userName);
//# sourceMappingURL=index.js.map