// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

const returningUser = document.querySelector('#returning-user') as HTMLElement
const userName = document.querySelector('#user') as HTMLElement
const TotalDisplay = document.querySelector('#reviews') as HTMLElement

const revie:{
    name : string,
    stars: number,
    loyaltyUser :boolean,
    date:string

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

function ReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {

    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'Review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

ReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)




const mine = {
    userName: 'Prisca',
    isReturning: true,
}

function popUser(isReturning : boolean, userName: string ) {

    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

popUser(mine.isReturning, mine.userName)

