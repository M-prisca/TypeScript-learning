"use strict";
const reviewTotalDisplayed = document.querySelector('#reviews');
const review = [
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
function showReviewedTotal(value) {
    reviewTotalDisplay.innerHTML = 'Review total :' + value.toString();
}
showReviewedTotal(reviews.length);
//# sourceMappingURL=index.js.map