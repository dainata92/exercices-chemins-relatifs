function validateForm(event){
    const form = event.target;
    console.log(form);
    console.log(event);
}
formulaire = document.getElementById("form");
formulaire.onsubmit = validateForm;
console.log("Bonjour");