function validateForm(event){
    event.preventDefault();
    const form = event.target;
    console.log(form);
    console.log(event);

    const data = new FormData(form);
    const adresseActuelle = data.get("adresseActuelle");
    const lien = data.get("lien");
    const adresseDestination = data.get("adresseDestination");

    //transforme le texte en liste
    const listeAdresseActuelle = adresseActuelle.split("/");
    //enleve le dernier fichier
    listeAdresseActuelle.pop();
    const listeLien = lien.split("/");
    const listeAdresseDestination = adresseDestination.split("/");
    //on parcourt chaque element de la liste pour voir si l'utilisateur mets ".."
    listeLien.forEach((element) => {
        if (element === ".."){
            //si oui, on enleve le dernier dossier
            listeAdresseActuelle.pop();
        }
        else {
            //sinon, on le rajoute
            listeAdresseActuelle.push(element);
        }
    }
    )

    //la j'ai du mal, je ne pense pas que mon code soit bon
    //je ne sais pas pourquoi
    if (listeAdresseActuelle.length != listeAdresseDestination.length){
        console.log("Faux");
    }
    for(let i=0; i<listeAdresseActuelle.length;i++){
        if (listeAdresseActuelle[i] != listeAdresseDestination[i]){
            console.log("Faux")
        }
    }
    console.log("Vrai");
    }
const formulaire = document.getElementById("form");
formulaire.onsubmit = validateForm;
console.log("Bonjour");

