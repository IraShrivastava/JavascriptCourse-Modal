'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

const addClass = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const removeClass = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i = 0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', removeClass)

}

btn.addEventListener('click',addClass)
overlay.addEventListener('click',addClass)

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        addClass()
})