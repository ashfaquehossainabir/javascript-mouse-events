// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);


const myBox = document.getElementById('myBox')
const myButton = document.getElementById('myButton')

// --> For Box Element

// myBox.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'tomato'
//     e.target.textContent = 'OUCH! 🤕'
// })

// myBox.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor = 'yellow'
//     e.target.textContent = "Don't do it 😲"
// })

// myBox.addEventListener('mouseout', (e) => {
//     e.target.style.backgroundColor = 'lightgreen'
//     e.target.textContent = 'Click Me 😀'
// })


myButton.addEventListener('click', (e) => {
    myBox.style.backgroundColor = 'tomato'
    myBox.textContent = 'OUCH! 🤕'
})

myButton.addEventListener('mouseover', (e) => {
    myBox.style.backgroundColor = 'yellow'
    myBox.textContent = "Don't do it 😲"
})

myButton.addEventListener('mouseout', (e) => {
    myBox.style.backgroundColor = 'lightgreen'
    myBox.textContent = 'Click Me 😀'
})