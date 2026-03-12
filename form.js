// recuperation 
let nom = document.getElementById("Nom");
let prenom = document.getElementById("Prenom");
let naissance = document.getElementById("naissance");
let ville = document.getElementById("ville");
let photo = document.getElementById("photo");
let sexeContainer = document.getElementById("sexeContainer");

//erreurs
let errNom = document.getElementById("errNom");
let errPrenom = document.getElementById("errPrenom");
let errNaiss = document.getElementById("errNaiss");
let errVille = document.getElementById("errVille");
let errPhoto = document.getElementById("errPhoto");
let errSexe = document.getElementById("errSexe");

//boutons
let btnValider = document.getElementById("btnValider");
let btnVider = document.getElementById("btnVider");
let affichage = document.getElementById("affichage");

//validation 
nom.addEventListener("blur", function(){
if(nom.value.trim() === ""){
    errNom.textContent = "Nom obligatoire";
    nom.style.border = "2px solid red";
    } else {
        errNom.textContent = "";
        nom.style.border = "2px solid green";
    }
});

prenom.addEventListener("blur", function(){
    if(prenom.value.trim() === ""){
        errPrenom.textContent = "Prénom obligatoire";
        prenom.style.border = "2px solid red";
    } else {
        errPrenom.textContent = "";
        prenom.style.border = "2px solid green";
    }
});

naissance.addEventListener("blur", function(){
    if(naissance.value === ""){
        errNaiss.textContent = "Date obligatoire";
        naissance.style.border = "2px solid red";
    } else {
        errNaiss.textContent = "";
        naissance.style.border = "2px solid green";
    }
});

ville.addEventListener("blur", function(){
if(ville.value === ""){
    errVille.textContent = "Choisir une ville";
    ville.style.border = "2px solid red";
    } else {
        errVille.textContent = "";
        ville.style.border = "2px solid green";
    }
});
/*  ville.addEventListener("chane", function(){
    if(ville.value === ""){
        errVille.textContent = "Choisir une ville";
        ville.style.border = "2px solid red";
    } else {
        errVille.textContent = "";
        ville.style.border = "2px solid green";
    }
});*/

photo.addEventListener("change", function(){
    if(photo.files.length === 0){
        errPhoto.textContent = "Ajouter une photo";
        photo.style.border = "2px solid red";
    } else {
        errPhoto.textContent = "";
        photo.style.border = "2px solid green";
    }
});

//bouton valider
btnValider.addEventListener("click", function(){
let sexe = document.querySelector('input[name="sexe"]:checked');

// Nom
if(nom.value.trim() == ""){
errNom.textContent = "Nom obligatoire";
nom.style.border = "2px solid red";
} else {
    errNom.textContent = "";
    nom.style.border = "2px solid green";
}
//prenom
if(prenom.value.trim() == ""){
    errPrenom.textContent = "Prénom obligatoire";
    prenom.style.border = "2px solid red";
} else {
    errPrenom.textContent = "";
    prenom.style.border = "2px solid green";
}

//ville
if(ville.value == ""){
 errVille.textContent = "Choisir une ville";
    ville.style.border = "2px solid red";
} else {
    errVille.textContent = "";
    ville.style.border = "2px solid green";
}

//naissance
if(naissance.value == ""){
    errNaiss.textContent = "Date obligatoire";
naissance.style.border = "2px solid red";
} else {
    errNaiss.textContent = "";
    naissance.style.border = "2px solid green";
}

//photo
if(photo.files.length == 0){
    errPhoto.textContent = "Ajouter une photo";
    photo.style.border = "2px solid red";
} else {
    errPhoto.textContent = "";
    photo.style.border = "2px solid green";
}
//sexe
if(!sexe){
    errSexe.textContent = "Choisir le sexe";
    sexeContainer.style.border = "2px solid red";
} else {
    errSexe.textContent = "";
    sexeContainer.style.border = "2px solid green";
}
//affichhage
 if(nom.value.trim() != "" && prenom.value.trim() != "" && naissance.value != "" &&
   ville.value != "" && photo.files.length != 0 && sexe){
    
affichage.innerHTML = 
    "<b>Nom:</b> " + nom.value + "<br>" +"<b>Prénom:</b> " + prenom.value + "<br>" +
    "<b>Date de naissance:</b> " + naissance.value + "<br>" +"<b>Ville:</b> " + ville.value + "<br>" +
    "<b>Sexe:</b> " + sexe.value + "<br>" +"<b>Photo:</b> " + photo.files[0].name;

} 

else {
    affichage.textContent = "";
    }
});

//bouton vider
btnVider.addEventListener("click", function(){
    document.getElementById("monFormulaire").reset();
nom.style.border = "";
prenom.style.border = "";
naissance.style.border = "";
ville.style.border = "";
photo.style.border = "";
sexeContainer.style.border = "";
errNom.textContent = "";
errPrenom.textContent = "";
errNaiss.textContent = "";
errVille.textContent = "";
errPhoto.textContent = "";
errSexe.textContent = "";
affichage.textContent = "";
});
