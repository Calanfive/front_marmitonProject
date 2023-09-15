import './style.css';

    
interface IRecette { 
    nom_recette: string, 
    note: string, 
    duree: string,
    lien_image: string
}

const title = document.createElement('h1');
title.setAttribute("id","section_top");
title.innerText = 'Marmitop';
title.style.textAlign = 'center'
title.style.fontSize = '60px';

const section_box1 = document.createElement('div');

const section_inputs = document.createElement('div');
section_inputs.classList.add('section_inputs');

const inputNom = document.createElement('input');
const inputLien = document.createElement('input');
const inputDuree = document.createElement('input');
const inputNote = document.createElement('input');
const label1 = document.createElement('p');
const label2 = document.createElement('p');
const label3 = document.createElement('p');
const label4 = document.createElement('p');
const button = document.createElement('button');

label1.innerText = 'nom';
label2.innerText = 'lien image';
label3.innerText = 'durée';
label4.innerText = 'note';
inputNom.setAttribute('type', 'text');
inputLien.setAttribute('type', 'text');
inputDuree.setAttribute('type', 'text');
inputNote.setAttribute('type', 'text');

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
label_input1.appendChild(inputNom);

label_input2.appendChild(label2);
label_input2.appendChild(inputLien);

label_input3.appendChild(label3);
label_input3.appendChild(inputDuree);

label_input4.appendChild(label4);
label_input4.appendChild(inputNote);

section_inputs.appendChild(label_input1);
section_inputs.appendChild(label_input2);
section_inputs.appendChild(label_input3);
section_inputs.appendChild(label_input4);

section_box1.appendChild(section_inputs);

const bulleButton = document.createElement('div')
bulleButton.classList.add('bulle-button');
bulleButton.appendChild(button);

section_box1.appendChild(bulleButton);


const section_h2= document.createElement('h2');
section_h2.innerText = 'Mes recettes';
section_h2.classList.add('section_h2');

const body_page = document.querySelector('#app') as HTMLDivElement;

const section_recettes = document.createElement('div')
section_recettes.classList.add('section_recettes');

body_page.appendChild(title);
body_page.appendChild(section_box1);
body_page.appendChild(section_h2);
body_page.appendChild(section_recettes);



function afficherUneRecette(maRecette: IRecette){
    const text_part = document.createElement('div')
    text_part.classList.add('text_part');
    
    const titreRecette = document.createElement('h3')
    titreRecette.classList.add('titreRecette');
    titreRecette.innerText = maRecette.nom_recette;
    text_part.appendChild(titreRecette);
    
    const noteRecette = document.createElement('p')
    noteRecette.classList.add('p1');
    noteRecette.innerText = maRecette.note;
    text_part.appendChild(noteRecette);

    const dureeRecette = document.createElement('p')
    dureeRecette.classList.add('p2');
    dureeRecette.innerText = maRecette.duree;
    text_part.appendChild(dureeRecette);
    
    const url_part = document .createElement('img')
    url_part.setAttribute('src', maRecette.lien_image);

    const larecette = document.createElement('div')
    larecette.classList.add('la_recette');
    
    larecette.appendChild(text_part);
    larecette.appendChild(url_part);
    section_recettes.appendChild(larecette);
}

bulleButton.addEventListener("click", async () => {   
    if(inputNom.value.length > 0 ){
        
        const maRecette : IRecette = { 
            nom_recette: inputNom.value, 
            note: inputNote.value, 
            duree: inputDuree.value,
            lien_image: inputLien.value
        }
        const response2 = await fetch("http://localhost:3030/recipes", {
            headers: new Headers({
            "Content-Type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify(maRecette),
        })
        const data = await response2.json()
        console.log("ma donnée", data)

        afficherUneRecette(maRecette);
        
        inputNom.value = "";
        inputLien.value = "";
        inputDuree.value = "";
        inputNote.value = "";
    }

    else {
        alert("Rentrer au moins un caractère")
    }
});
    
// Get all recipes
const response = await fetch('http://localhost:3030/recipes')
const mesRecettes = await response.json()
console.log('Mes recettes', mesRecettes);

for (let i = 0; i < mesRecettes.length; i++) {
    const element = mesRecettes[i];
    console.log('ma recette à afficher', element)
    const recetteToShow: IRecette = {
        duree: element.duree,
        note: element.note,
        lien_image: element.url,
        nom_recette: element.recette,
    }
    afficherUneRecette(recetteToShow)
}