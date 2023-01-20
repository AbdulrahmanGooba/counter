const counter = document.getElementById('count')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')



let count = 0;
increase.addEventListener('click', ()=>{
  count++
  counter.innerText =  count;
  counter.style.color = "green"
})
decrease.addEventListener('click', ()=>{
  count--
  counter.innerText =  count;
  counter.style.color = "red"
})
reset.addEventListener('click', ()=>{
  count = 0
  counter.innerText =  count ;
  counter.style.color = "black"
})