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
  ]

  const grid = document.querySelector('.grid')

  //create board
  function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
      let card = document.createElement('img')
      card.setAttribute('src', 'imgs/block.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
createBoard()
})