
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
    title.innerHTML = ''
    text.split('')
        .forEach(function(c) {
            title.appendChild(addColorToCharacter(c))
        })
}

const randColor = () => "#"+((1<<24)*Math.random()|0).toString(16)

function addColorToCharacter(char) {
  const span = document.createElement('span')
  span.innerText = char
  span.style.color = randColor()
  return span
}
