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

const surname = prompt('Ci servirebbe anche il cognome :)');

const favouriteColor = prompt('Qual\'è il tuo colore preferito?');

const age = prompt('Quanti anni hai?');

console.log('Nome -->',name,'Cognome -->', surname,'Colore Preferito -->', favouriteColor, 'Età -->', age );

let generatedPassword = name + surname + favouriteColor + age; 

console.log(generatedPassword)

document.getElementById('nameOutput').innerHTML = name
document.getElementById('outputPassword').innerHTML = generatedPassword
