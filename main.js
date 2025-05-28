//Получение кнопок
const qOne = document.querySelector('.q_one')
const qTwo = document.querySelector('.q_two')
const qThree = document.querySelector('.q_three')
const qFour = document.querySelector('.q_four')
const bStart = document.querySelector('.start')
const bStop = document.querySelector('.stop')
const bMinus = document.querySelector('.minus')
const bPlus = document.querySelector('.plus')


let myAudio = document.querySelector('.audio')
let rangeUser = document.querySelector('.range')
let output = document.querySelector('.range')
let playFunction
let bpm = 138

updateBpm(output.value)
 
function addCircle(count) {
    document.querySelector('.circles').innerHTML = ''
    for (let i = 0; i < count;i++){
        document.querySelector('.circles').innerHTML += `
            <div class="circle"></div>
        `
    }
} 
  
rangeUser.addEventListener('input', ()=>{
    updateBpm(rangeUser.value)
})


bMinus.addEventListener('click', ()=>{
    output.value--
    updateBpm(output.value)
})

bPlus.addEventListener('click', ()=>{
    output.value++
    updateBpm(output.value)
})




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
   addCircle(4)
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

function updateBpm(value){
    document.querySelector('.value-bpm').innerHTML = value
    bpm = value
}

document.querySelector('.jura-chords').addEventListener('click', ()=>{
      document.querySelector('.chords_window').style.display = 'block'
      document.querySelector('.main').style.display = 'none'
    })
document.querySelector('.jura-metronom').addEventListener('click', ()=>{
      document.querySelector('.metronom-window').style.display = 'block'
      document.querySelector('.main').style.display = 'none'
    })
document.querySelector('.back-ch').addEventListener('click', ()=>{
      document.querySelector('.main').style.display = 'flex'
      document.querySelector('.chords_window').style.display = 'none'
    })
document.querySelector('.back-metr').addEventListener('click', ()=>{
      document.querySelector('.main').style.display = 'flex'
      document.querySelector('.metronom-window').style.display = 'none'
    })