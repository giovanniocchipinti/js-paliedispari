// FUNZIONI

// Creo una funzione che controlli se la parola inserita dall'utente è palindroma.

/** 
 * La funzione dovrà controllare se la stringa inserita, capovolta, rimane uguale;
 * @param {string} wordToCheck
 * @returns {boolean} true/false
 */

function isWordPali(wordToCheck) {
    let newWord = wordToCheck.split('').reverse('').join('');

    return wordToCheck === newWord;
}

// // PROGRAMMA PRINCIPALE

// definisco una variabile con un prompt per chiedere all'utente di scrivere una parola da controllare
let wordIns = prompt('inserisci la parola da controllare')

/** utilizzo un'istruzione condizionale per definire che:
    grazie alla funzione precedentemente creata, se la parola inserita dall'utente è uguale alla stessa parola capovolta stampa in console la stringa: 'la parola è palindroma';
    altrimenti stampa la stringa: 'la parola non è palindroma'
*/

if (isWordPali(wordIns) === true) {
    console.log('La parola è palindroma');
}else {
    console.log('La parola non è palindroma');
}






