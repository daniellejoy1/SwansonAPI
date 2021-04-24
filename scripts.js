/*
* ***********
! ASYNCHRONOUS PROGRAMMING
* ***********

-synchronous programming is code read line by line
-asynchronous programming allows a program to do more than one thing at a time.
-Makes it possible to run long-running actions without stopping the program to wait for a response.
*/

/*
* **********
! API
* **********

-API: Application program interface
-Is NOT a database or server
-allows us access points to server
    -comes in the form of ENDPOINTS
    -endpoints directs us to sets of data

-REST API: Representational State Transfer
    -creates and object of requested data by the client, sends values in resoncse to the user.
-Methods:
    CRUD
        Create (POST)
        Read (GET)
        Update (PUT)
        Delete (DELETE)        
*/

let baseURL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
// console.log(document.childNodes[1].childNodes)

// ! GLOBAL ELEMENTS
let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');

// ! EVENT LISTENER
logo.addEventListener('click', fetchQuote);

/* 
* **********
! FETCH
* **********

let promise = fetch(url, [option]);

*/

function fetchQuote() {
    fetch(baseURL)
    .then(res => res.json())
    .then(json => console.log(json));

}

/*
!async/await
*/

async function fetchQuote() {
    const response = await fetch(baseURL);
    const json = await response.json();
    // console.log('Async/Await)', json);
    displayQuote(json);
}

let displayQuote = data => {
    // console.log('DISPLAY QUOTE', data[0]);


let logoContainer = document.getElementById('genQuote');

logoContainer.firstElementChild != null ?
logoContainer.removeChild(logo) :
null;

// ! set elements

let quoteBy = document.createElement('p');
quoteBy.className = 'quoteBy';
quoteBy.innerText = "~ Ron Swanson";
quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;';

let quote = document.createElement('h1');
quote.className = 'quote';
quote.innerText = `${data}`;
quote.style = 'font-family: pinewood; color: #3a2718;';

let img = document.createElement('img');
img.src = './assets/ron.png';
img.alt = 'Ron Swanson';
img.style = 'height: 100px; width: auto;';

// !appending
quoteContainer.appendChild(quote);
quoteContainer.appendChild(quoteBy);
quoteContainer.appendChild(img);


img.addEventListener('click', () => {
    quoteContainer.removeChild(quote);
    quoteContainer.removeChild(quoteBy);
    quoteContainer.removeChild(img);
    fetchQuote();
})
}