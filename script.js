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

function calculCheminRelatif(cheminActuel, cheminLien){
    if (cheminLien.startsWith("/")){
        return cheminLien;
    }
    const chaine = cheminActuel.split("/"); 
    chaine.pop();
    const base = chaine.join("/"); 
    const final = base + "/" + cheminLien; 
    return final;
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

