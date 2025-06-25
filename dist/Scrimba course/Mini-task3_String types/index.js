"use strict";
const reviewTotal = document.querySelector('#reviews');
const rev = [
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
function showReview(value, reviewer) {
    reviewTotal.innerHTML = 'Review total :' + value.toString() + '| Last reviewed by ' + reviewer;
}
showReview(reviews.length, reviews[0].name);
//# sourceMappingURL=index.js.map