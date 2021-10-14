const startBtn = document.querySelector('.start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.querySelector('.time-list'),
  timeEl = document.querySelector('#time'),
  board = document.querySelector('.board');


let time = 0,
    score = 0;
    
startBtn.addEventListener('click',(e)=>{
 e.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click',(e)=>{
   if (e.target.classList.contains('time-btn')) {
    screens[1].classList.add('up')
    let elAttr = e.target.getAttribute('data-time') 
    time = parseInt(elAttr)
    startGame()
}
})   

function startGame() {
  setInterval(decreaseTime , 1000 );
  createRandomCircle()
  timeEl.innerHTML = `00:${time}`
 
  
}

function decreaseTime() {
    if (time === 0){
        timeEl.parentNode.classList.add('hide')
        board.innerHTML = `Ваш счет: ${score}`
    }else{
        let currentTime = --time;
        if(currentTime < 10){
            currentTime = `0${currentTime}`;
        }
        timeEl.innerHTML = `00:${currentTime}`
    }
}

function createRandomCircle() {
    const circle = document.createElement('div');
    
  circle.classList.add('circle');
  
  let{width,height} = board.getBoundingClientRect()
  
  let size = circleRandom(10,60)
  
  let x = circleRandom(0 , width - size)
  let y = circleRandom(0 , height - size )
  
  
  
    circle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    `
   
    
   board.appendChild(circle)

  
} 
board.addEventListener('click', (e)=>{
    if(e.target.classList.contains('circle')){
     score++
     e.target.remove()
     createRandomCircle()   
    }
})
function circleRandom(min , max) {
  
   return Math.floor(Math.random()* (max - min) + min)
}