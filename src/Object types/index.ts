// Object Types
// In this scrim, based on what we just learnt, can you change userName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.

const returnUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNmeDisplay = document.querySelector('#user') as HTMLElement
const reviwTotalDisplay = document.querySelector('#reviews') as HTMLElement

let isOpn: boolean;

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
]

function showReviwTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + ' | last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviwTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const yours: {
    firstName: string;
    lastName: string;
    age: number;
    isReturning: boolean;
} = {
    firstName: 'Prisca',
    lastName: 'Masereli',
    age: 20,
    isReturning: true
}

function poplateUser(isReturning: boolean, firstName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = firstName
}

poplateUser(you.isReturning, you.firstName)
