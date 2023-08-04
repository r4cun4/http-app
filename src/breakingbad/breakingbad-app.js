/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {

    const resp = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await resp.json();

    console.log(data);
    return data[0];

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App'
    element.innerHTML = 'Loading...'
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {

        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authoLabel, nextQuoteButton );

    }

    //! mi solucion
    // nextQuoteButton.addEventListener('click', async() => {
    //     nextQuoteButton.setAttribute('disabled', true);
    //     await fetchQuote()
    //         .then( renderQuote )
    //         .finally(() => {
    //             nextQuoteButton.removeAttribute('disabled');
    //         });

    // });

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote( quote );
    });

    fetchQuote()
        .then( renderQuote );

}