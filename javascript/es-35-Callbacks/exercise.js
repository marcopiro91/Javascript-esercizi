/* # Callback

Write a function called repeatHello which takes a callback as it's parameter. The callback function will simply print "Hello". The repeatHello function will have to execute the callback function with an interval of 1 second. The callback function must be an arrow function, can you also explain why? */


function repeatHello(callback) {
    setInterval(() => callback(), 1000);
}

repeatHello(() => console.log('Hello'));

/* Le arrow function ereditano il valore 'this' dal contesto circostante. Nel contesto della funzione repeatHello, l'uso di una arrow function assicura che il valore this all'interno della callback sia lo stesso valore this della funzione repeatHello stessa.  */