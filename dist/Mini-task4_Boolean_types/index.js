"use strict";
const reviewDisplay = document.querySelector('#reviews');
const revi = [
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
function showTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'Review total :' + value.toString() + '| Last reviewed by ' + reviewer + ' ' + iconDisplay;
}
showTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
//# sourceMappingURL=index.js.map