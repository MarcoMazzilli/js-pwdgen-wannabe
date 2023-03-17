/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

/* 
Chiedo i dati all'utente tramite un prompt, e salvo tutte le sue risposte in delle variabili.
Per creare la "password personalizzata" e mostrarla all'utente utilizzerò una variabile definita "generatedPassword" che verrà stampata all'interno di un tag html.
*/

const name = prompt('Inserisci qui il tuo nome');

const surname = prompt('Ci servirebbe anche il cognome,:)' );

const favouriteColor = prompt('Qual\'è il tuo colore preferito?');

const age = parseInt(prompt('Quanti anni hai?')) ;

const currentDate = 2023;

const dateOfBirth = currentDate - age;
console.log(dateOfBirth);

// dichiarazioni variabili

let generatedPassword = name + surname + favouriteColor + dateOfBirth; 

console.log(generatedPassword);

document.getElementById('nameOutput').innerHTML = name;
document.getElementById('nameOutput_spiegazione').innerHTML = name;
document.getElementById('outputPassword').innerHTML = generatedPassword;

let spiegazione = `
Conosendo il tuo nome: "${name}",cognome: "${surname}", la tua età: "${age}" e il tuo colore preferito (il "${favouriteColor}")
possiamo creare la combo perfetta per una password infallibile! <br>
A cosa ci serviva la tua età? <br>
Per calcolare la tua data di nascita, nonchè le ultime quattro cifre della tua password.
`;
document.getElementById('spiegazioneOutput').innerHTML = spiegazione ;