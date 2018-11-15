
// 1. querySelectors
// 2. event listeners
// 3. functions

// const btn = document.querySelector('#btn1')

const input = document.querySelector('#titleInput')
const title = document.querySelector('#title')

// btn.addEventListener('click', function(e) {
//   // console.log(e.target)
//   e.target.style.backgroundColor = 'blue'
//   e.target.classList.add('grow')
//   alert("You ordered pizza!")
// })

// console.dir(btn)


// commented sections: used to console log the event to view what happens in the brower when you click the button with the 'inspect' open. have to use console.dir for chrome, as well as the console.log in the addEventListener.

input.addEventListener('input', changeText)

function changeText(e) {
  const text = e.target.value
  title.innerText = text
}

function addColorToCharacter(char) {
  const span = document.createElememnt('span')
}
