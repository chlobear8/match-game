document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
    name: 'dog',
    img: 'imgs/dog.png'
    },
    {
      name: 'cat',
      img: 'imgs/cat.png'
    },
    {
      name: 'fish',
      img: 'imgs/fish.png'
    },
    {
      name: 'bird',
      img: 'imgs/bird.png'
    },
    {
      name: 'squirrel',
      img: 'imgs/squirrel.png'
    },
    {
      name: 'turtle',
      img: 'imgs/turtle.png'
    },
    {
      name: 'dog',
      img: 'imgs/dog.png'
    },
    {
      name: 'cat',
      img: 'imgs/cat.png'
    },
    {
      name: 'fish',
      img: 'imgs/fish.png'
    },
    {
      name: 'bird',
      img: 'imgs/bird.png'
    },
    {
      name: 'squirrel',
      img: 'imgs/squirrel.png'
    },
    {
      name: 'turtle',
      img: 'imgs/turtle.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create board
  function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'imgs/block.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for match
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You have found a match!')
      cards[optionOneId].setAttribute('src', 'imgs/square.png')
      cards[optionTwoId].setAttribute('src', 'imgs/square.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'imgs/block.png')
      cards[optionTwoId].setAttribute('src', 'imgs/block.png')
      alert('Sorry try again.')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You Won!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
createBoard()
})