// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.

// : booolean


const reviewDisplay = document.querySelector('#reviews')

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
]

// Solution 

function showTotal (value: number, reviewer: string, isLoyalty: boolean) { 

    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'Review total :' + value.toString() + '| Last reviewed by ' + reviewer + ' ' + iconDisplay
}

showTotal(reviews.length, reviews[0].name,reviews[0].loyaltyUser)
 