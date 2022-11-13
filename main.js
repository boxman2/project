const input= document.querySelector('input')
const goButton = document.querySelector('.goButton')
const resetButton = document.querySelector('.resetButton')
const result = document.querySelector('.result')
const chanceBlank = document.querySelector('.chanceBlank')
const img = document.querySelector('img')

let comNum = 0;
let chance = 5;
let gameOver = false;
let history = []

function randomNum (){
    comNum = Math.floor(Math.random()*100+1)
    console.log(comNum)
}
randomNum()

input.addEventListener('focus',()=>{
    input.value =''
})

goButton.addEventListener('click',()=>{
    if(1>input.value||100<input.value){
        result.textContent = '1부터 100사이의 숫자를 입력해주세요'
        return;
    }
    if(history.includes(input.value)){
        result.textContent = '이미 입력했던 숫자입니다'
        return;
    }
    chance --;
    chanceBlank.textContent = `남은기회 : ${chance}`
    if(comNum <input.value){
        result.textContent='DOWN!'
        img.src= 'https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif'
    }else if (comNum >input.value){
        result.textContent='UP!'
        img.src= 'https://media1.giphy.com/media/tIeCLkB8geYtW/giphy.gif?cid=ecf05e472une1kwl5djcssd3prax6yd9wvz1ilkvwxbi1imd&rid=giphy.gif&ct=g'
    } else {
        result.textContent ='정답입니다!'
        img.src= 'https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif'
        gameOver = true;
    }

    history.push(input.value);
    console.log(history)

    if(chance<1){
        gameOver= true;
    }
    if(gameOver){
        goButton.disabled= true;
    }
})

resetButton.addEventListener('click', ()=>{
    result.textContent = '죽기 싫다면 맞춰라'
    randomNum()
    chance = 5
    chanceBlank.textContent = `남은기회 : ${chance}`
    gameOver = false
    goButton.disabled= false;
    history= []
})

