import './style.css';

const title = document.createElement('h1');
title.setAttribute("id","section_top");
title.innerText = 'Marmitop';
title.style.textAlign = 'center'

const section_box1 = document.createElement('div');

const section_inputs = document.createElement('div');
section_inputs.classList.add('section_inputs');

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const label1 = document.createElement('p');
const label2 = document.createElement('p');
const label3 = document.createElement('p');
const label4 = document.createElement('p');
const button = document.createElement('button');

label1.innerText = 'nom';
label2.innerText = 'lien image';
label3.innerText = 'durée';
label4.innerText = 'note';
input1.setAttribute('type', 'text');
input2.setAttribute('type', 'text');
input3.setAttribute('type', 'text');
input4.setAttribute('type', 'text');

section_box1.style.border = "1px solid black";
section_box1.classList.add('section_box1');

button.setAttribute('type', 'button');
button.innerText = 'Ajouter';

const label_input1 = document.createElement('div') 
const label_input2 = document.createElement('div')
const label_input3 = document.createElement('div') 
const label_input4 = document.createElement('div')
label_input1.classList.add('label_input');
label_input2.classList.add('label_input');
label_input3.classList.add('label_input');
label_input4.classList.add('label_input');

label_input1.appendChild(label1);
label_input1.appendChild(input1);

label_input2.appendChild(label2);
label_input2.appendChild(input2);

label_input3.appendChild(label3);
label_input3.appendChild(input3);

label_input4.appendChild(label4);
label_input4.appendChild(input4);

section_inputs.appendChild(label_input1);
section_inputs.appendChild(label_input2);
section_inputs.appendChild(label_input3);
section_inputs.appendChild(label_input4);

section_box1.appendChild(section_inputs);

const bulleButton = document.createElement('div')
bulleButton.classList.add('bulle-button')
bulleButton.appendChild(button)

section_box1.appendChild(bulleButton);

const section_title1= document.createElement('h2');
section_title1.innerText = 'Mes recettes';
section_title1.classList.add('section_title1');

const section_box2= document.createElement('div');
section_box2.innerText = 'Les choux à la fraise';
section_box2.classList.add('section_box2');

const section_box3= document.createElement('div');
section_box3.innerText = 'Les choux à la crème';
section_box3.classList.add('section_box3');

const body_page = document.querySelector('#app') as HTMLDivElement;

body_page.appendChild(title)
body_page.appendChild(section_box1)
// body_page.appendChild(section_title1)
// body_page.appendChild(section_box2)
// body_page.appendChild(section_box3)
