const cardArray = [
    {
        name: 'robot1',
        img: 'robot1.jpg'
    },
    {
        name: 'robot2',
        img: 'robot2.jpg'
    },
    {
        name: 'robot3',
        img: 'robot3.jpg'
    },
    {
        name: 'robot4',
        img: 'robot4.jpg'
    },
    {
        name: 'robot5',
        img: 'robot5.jpg'
    },
    {
        name: 'robot6',
        img: 'robot6.jpg'
    },
    {
        name: 'robot1',
        img: 'robot1.jpg'
    },
    {
        name: 'robot2',
        img: 'robot2.jpg'
    },
    {
        name: 'robot3',
        img: 'robot3.jpg'
    },
    {
        name: 'robot4',
        img: 'robot4.jpg'
    },
    {
        name: 'robot5',
        img: 'robot5.jpg'
    },
    {
        name: 'robot6',
        img: 'robot6.jpg'
    }
]

cardArray.sort(()=> 0.5 - Math.random());


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'background.jpg')
        card.setAttribute('data-id',i)
        card.classList.add('anvers')
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
  
createBoard()

function checkMatch () {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found the match')
        cards[optionOneId].style.visibility = 'hidden';
        cards[optionTwoId].style.visibility = 'hidden';
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','background.jpg');
        cards[optionTwoId].setAttribute('src','background.jpg');
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulation you found all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 200)
    }
}
