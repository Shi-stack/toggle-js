const square=document.querySelector ('.square');
const button= document.querySelector('button');
const body= document.querySelector('body');

// When toggle button click it will perform this function
const visibleChange= function(){
  square.classList.toggle('change');
}

//When toggle button press the background color of button will also change

const buttonChange= function(){
  button.classList.toggle('change1');
}

// Background should also change when toggle is clicked

const backgroundChange= function(){
body.classList.toggle('change2');
}

//Each time when you call event the visibleChange should perform

button.addEventListener('click',visibleChange);

button.addEventListener ('click',buttonChange);

button.addEventListener ('click',backgroundChange);