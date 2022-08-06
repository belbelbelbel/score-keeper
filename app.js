const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const resetbutton = document.querySelector('#reset')
const scorelimit = document.querySelector('#limit')
const input = document.querySelector('input')
const won = document.querySelector('#printwinner')
let p2score = 0;
let p1score = 0;
let winningscore = 5;
let isgameover = false;

 p1button.addEventListener('click',function(){
    if (!isgameover){
        p1score = p1score + 1
        player1.textContent = p1score;
   if (p1score === winningscore){
    isgameover = true
    printwinner();
   player1.classList.add('winner')
   player2.classList.add('loser')
   }
   
}

 })
 
 
 p2button.addEventListener('click',function(){
    if (!isgameover){
        p2score = p2score + 1
        player2.textContent = p2score;
   if (p2score === winningscore){
    isgameover = true
    printwinner();
    player1.classList.add('winner')
    player2.classList.add('loser')
   }
   
}

 })
 input.addEventListener('click', function() {
   scorelimit.textContent = this.value;
   winningscore = Number(this.value)
 })
 
 
 resetbutton.addEventListener('click',function(){
   isgameover = false; 
   p1score = 0;
    p2score = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classList.remove('winner', 'loser')
    player2.classList.remove('winner', 'loser')
    won.textContent = '';
    scorelimit.textContent = 0;
    
 })
 function printwinner(){
   if(p2score > p1score){
      won.textContent = 'player2';
   }
else
    {
      won.textContent = 'player1';
   }
 }

 
 



 