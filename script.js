function validateForm(event){
    event.preventDefault();
    const form = event.target;
    //console.log(form);
    //console.log(event);

    const data = new FormData(form);
    const cheminActuel = data.get("adresseActuelle");
    const cheminLien = data.get("lien");
    const cheminDestination = data.get("adresseDestination");
    const resultat = document.getElementById("resultat");

    if (cheminDestination != calculCheminRelatif(cheminActuel, cheminLien)){
        console.error(
            "test de calculCheminRelatif: résultat innatendu"
        )
        resultat.innerText="Erreur";
    }
    else{
        //alert("Bravo");
        resultat.innerText="Bravo";
    }
}

function calculCheminRelatif(cheminDepart, cheminLien){
    if (cheminLien.startsWith("/")){
        return cheminLien;
    }
    const cheminActuel = cheminDepart.split("/");
    //on veut etre dans le dossier actuel, pas dans le fichier actuel
    //meme si le cheminDepart fini par "/",
    //le resultat de split va avoir un dernier element vide a enlever
    //"/etc/".split("/") => ['', 'etc', '']
    cheminActuel.pop();
    
    //console.log(cheminActuel);
    for(const element of cheminLien.split("/")){
        if (element == ".."){
            //on remonte au dossier parent
            cheminActuel.pop();
        }
        else {
            cheminActuel.push(element);
        }
    //console.log(cheminActuel);
    }
    return cheminActuel.join("/");

}

function nouvelExercice(){
    const index=Math.floor(Math.random()*valeursDeTest.length);
    const exercice = valeursDeTest[index];
    const cheminActuel = document.getElementById("adresseActuelle");
    cheminActuel.value = exercice.actuel; 
    const cheminLien = document.getElementById("lien");
    cheminLien.value = exercice.lien;
    const cheminDestination = document.getElementById("adresseDestination");
    cheminDestination.value="";
    const resultat = document.getElementById("resultat");
    resultat.innerText="";
}

const valeursDeTest = [
    {
        actuel: "/",
        lien: "test",
        attendu: "/test",
    },
    {
        actuel: "/test/lol",
        lien: "re-test",
        attendu: "/test/re-test",
    },
    {
        actuel: "/test/lol/",
        lien: "re-test",
        attendu: "/test/lol/re-test",
    },
    {
        actuel: "/test",
        lien: "lol/re-test",
        attendu: "/lol/re-test",
    },
     {
        actuel: "/test",
        lien: "/lol/re-test",
        attendu: "/lol/re-test",
    },
     {
        actuel: "/etc/apache/",
        lien: "../original/atc.html",
        attendu: "/etc/original/atc.html",
    }, 
    {
        actuel: "/etc/apache/",
        lien: "hello/../original/atc.html",
        attendu: "/etc/apache/original/atc.html",
    },
    {
        actuel: "/a/b/c/d",
        lien: "../../e/f",
        attendu: "/a/e/f"
    },

    {
        actuel: "/a/b/c/",
        lien: "../../../x",
        attendu: "/x"
    },
    {
        actuel: "/folder/",
        lien: "a/b/../../c",
        attendu: "/folder/c"
    }
]
for (const test of valeursDeTest) {
    const resultat = calculCheminRelatif(test.actuel, test.lien);

    if (resultat != test.attendu) {
        console.error(
            "test de calculCheminRelatif: résultat innatendu",
            resultat,
            test,
        )
    }
    }
console.log("Fin de test");
const formulaire = document.getElementById("form");
formulaire.onsubmit = validateForm;
const nouvelExerciceBouton = document.getElementById("nouvelExercice");
nouvelExerciceBouton.onclick = nouvelExercice;

function explication(cheminActuel,cheminLien,cheminDestination){
    return [
            "Le chemin actuel est composé d'un dossier /test suivi par un fichier lol",
            "Le lien est composé d'un fichier re-test",
            "Le fichier re-test supprime le fichier lol et le fichier re-test sera placé dans le dossier /test",
        ];
}
/**
 * 
 * @param {string[]} a 
 * @param {string[]} b 
 * @returns 
 */
function differenceTableau(a,b){
    if (a.length != b.length){
        return "Resultat n'a pas la longueur attendue";
    }
    //si on atteint cet endroit du code, les deux tableaux ont la meme longueur
    for(let i=0; i<a.length;i++){
        if (a[i] != b[i]){
            return `Element ${i} pas egal`;
        }
    }
}
const valeursTestExplication = [
    {
        actuel: "/test/lol",
        lien: "re-test",
        destination: "/test/re-test",
        resultatAttendu: [
            "Le chemin actuel est composé d'un dossier /test suivi par un fichier lol",
            "Le lien est composé d'un fichier re-test",
            "Le fichier re-test supprime le fichier lol et le fichier re-test sera placé dans le dossier /test",
        ]
    }
]
for (const test of valeursTestExplication) {
    const resultat = explication(test.actuel, test.lien, test.destination);
    const difference = differenceTableau(resultat,test.resultatAttendu);
    if (difference) {
        console.error(difference);
    }
    }
    

