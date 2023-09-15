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
title.style.textAlign = 'center';
title.style.fontSize = '60px';

const section_box1 = document.createElement('div');

const section_inputs = document.createElement('div');
section_inputs.classList.add('section_inputs');

const inputNom = document.createElement('input');
const inputLien = document.createElement('input');
const inputDuree = document.createElement('input');
const inputNote = document.createElement('input');
const labelNom = document.createElement('p');
const labelLien = document.createElement('p');
const labelDuree = document.createElement('p');
const labelNote = document.createElement('p');
const button = document.createElement('button');

labelNom.innerText = 'nom';
labelLien.innerText = 'lien image';
labelDuree.innerText = 'durée';
labelNote.innerText = 'note';
inputNom.setAttribute('type', 'text');
inputLien.setAttribute('type', 'text');
inputDuree.setAttribute('type', 'text');
inputNote.setAttribute('type', 'text');

section_box1.style.border = "1px solid black";
section_box1.classList.add('section_box1');

button.setAttribute('type', 'button');
button.innerText = 'Ajouter';

const label_inputNom = document.createElement('div') 
const label_inputLien = document.createElement('div')
const label_inputDuree = document.createElement('div') 
const label_inputNote = document.createElement('div')
label_inputNom.classList.add('label_input');
label_inputLien.classList.add('label_input');
label_inputDuree.classList.add('label_input');
label_inputNote.classList.add('label_input');

label_inputNom.appendChild(labelNom);
label_inputNom.appendChild(inputNom);

label_inputLien.appendChild(labelLien);
label_inputLien.appendChild(inputLien);

label_inputDuree.appendChild(labelDuree);
label_inputDuree.appendChild(inputDuree);

label_inputNote.appendChild(labelNote);
label_inputNote.appendChild(inputNote);

section_inputs.appendChild(label_inputNom);
section_inputs.appendChild(label_inputLien);
section_inputs.appendChild(label_inputDuree);
section_inputs.appendChild(label_inputNote);

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
    noteRecette.innerText = ("Note: "+maRecette.note);
    text_part.appendChild(noteRecette);

    const dureeRecette = document.createElement('p')
    dureeRecette.classList.add('p2');
    dureeRecette.innerText = ("Durée: "+maRecette.duree+" minutes");
    text_part.appendChild(dureeRecette);
    
    const url_part = document.createElement('img')
    url_part.setAttribute('src', maRecette.lien_image);
    
    const larecette = document.createElement('div')
    larecette.classList.add('la_recette');
    
    //option delete
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.innerText = 'Supprimer';
    deleteBtn.classList.add('deleteBtn');
    text_part.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        larecette.remove();
    })
    
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
        console.log("ma donnée", data);
        
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