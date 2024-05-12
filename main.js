document.getElementById('getQuoteBtn').addEventListener('click', () => {

    const apiUrl = 'https://api.quotable.io/random';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error (`Error: Api call failed with status ${response.status} and status text ${response.statusText}`)
        }
        return response.json()
    })
    .then(data => {
        const dataContent = data.content;
        const dataAuthor = data.author;

        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');

        quoteElement.textContent = `${dataContent}`;
        authorElement.textContent = `${dataAuthor}`;
    })
    .catch(error => {
        console.log('Error while getting data', error);
        quoteElement.textContent = `Failed to fetch quote, please try again later.`
        authorElement.textContent = ''
    })

}) 
  // Sada napraviti novi fajl i razbiti sve na funkcije i tako vezvati modularnost koda.