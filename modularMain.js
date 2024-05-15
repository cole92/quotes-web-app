// Funkcija za event Listenere
const setEventListeners = () => {
    document.getElementById('getQuoteBtn').addEventListener('click', fetchAndDisplayQuote);
};
// Funkcija za dobavljanje i prikaz podataka
const fetchAndDisplayQuote = () => {
    const quoteUrl = 'https://api.quotable.io/random';

    fetch(quoteUrl)
    .then(handleResponse)
    .then(data => {
        updateUI(data);
        saveQuoteToLocal(data); // Čuvanje novog citata u lokalno skladište
    })
};
// Funkcija za obradom odgovora
const handleResponse = response => {
    if (!response.ok) {
        throw new Error (`API call failed with status: ${response.status} and status text ${response.statusText}`);
    }
    return response.json();
};
// Funkcija za prikazivanje podataka
const updateUI = data => {
    document.getElementById('quote').textContent = data.content;
    document.getElementById('author').textContent = data.author;
};
// Funkcija za obradu i prikaz greske
const handleError = error => {
    console.log(`Error while getting data`, error);
    document.getElementById('quote').textContent = 'Failed to fetch quote, please try again later.';
    document.getElementById('author').textContent = '';
};
// Funkcija za cuvanje citata u lokalnom skladistu
const saveQuoteToLocal = quote => {
    let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
    quotes.push(quote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    console.log('Quotes after saving:', JSON.parse(localStorage.getItem('quotes')));
};

// Funkcija za inicijalizovanje - pokretanje aplikacije
const init = () => {
    setEventListeners();
};
// Pokretanje aplikacije
init()
