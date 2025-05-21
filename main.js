//Получение кнопок
const qOne = document.querySelector('.q_one')
const qTwo = document.querySelector('.q_two')
const qThree = document.querySelector('.q_three')
const qFour = document.querySelector('.q_four')
const bStart = document.querySelector('.start')
const bStop = document.querySelector('.stop')

let bpm = 20

let myAudio = document.querySelector('.audio')
let rangeUser = document.querySelector('.range')
let playFunction

function addCircle(count) {
    document.querySelector('.circles').innerHTML = ''
    for (let i = 0; i < count;i++){
        document.querySelector('.circles').innerHTML += `
            <div class="circle"></div>
        `
    }
}


//Вызов функции при нажатии на кнопки
qOne.addEventListener('click', ()=>{
    addCircle(1)
})
qTwo.addEventListener('click', ()=>{
    addCircle(2)
})
qThree.addEventListener('click', ()=>{
    addCircle(3)
})
qFour.addEventListener('click', ()=>{
   addCircle(3)
})


function playAudio() {
    myAudio.play()
}


bStart.addEventListener('click', ()=>{
    let t = 60 / bpm * 1000
    playFunction = setInterval(playAudio, t)
})


bStop.addEventListener('click', ()=>{
    clearInterval(playFunction)
})