function validateForm(event){
    event.preventDefault();
    const form = event.target;
    console.log(form);
    console.log(event);

    const data = new FormData(form);
    const cheminActuel = data.get("adresseActuelle");
    const cheminLien = data.get("lien");
    const cheminDestination = data.get("adresseDestination");
    if (cheminDestination != calculCheminRelatif(cheminActuel, cheminLien)){
        console.error(
            "test de calculCheminRelatif: résultat innatendu"
        )
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
    
    console.log(cheminActuel);
    for(const element of cheminLien.split("/")){
        if (element == ".."){
            //on remonte au dossier parent
            cheminActuel.pop();
        }
        else {
            cheminActuel.push(element);
        }
    console.log(cheminActuel);
    }
    return cheminActuel.join("/");

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

