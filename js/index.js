const btn = document.querySelector('#btn1')

btn.addEventListener('click', function(e) {
  // console.log(e.target)
  e.target.style.backgroundColor = 'purple'
  alert("You clicked the button")
})

// console.dir(btn)


// commented sections: used to console log the event to view what happens in the brower when you click the button with the 'inspect' open. have to use console.dir for chrome, as well as the console.log in the addEventListener.
