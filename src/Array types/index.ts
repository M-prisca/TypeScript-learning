// Array Types
// Can you add a stayedAt property to the you Object, that contains places you 
// have stayed as strings, then add the correct key with assigned type to the 
// existing Object Type?

const returningUserDisplays = document.querySelector('#returning-user') as HTMLElement
const userNameDisplays = document.querySelector('#user') as HTMLElement
const reviewTotalDisplays = document.querySelector('#reviews') as HTMLElement
let isOpenIt: boolean  ;  


const reviewed :{
    name : string,
    stars : number,
    loyaltyUser: boolean,
    date : string
}[]= [
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


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {

    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


const me: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} ={
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}
 

function populateUsers(isReturning : boolean, userName: string ) {

    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUsers(you.isReturning, you.firstName)

