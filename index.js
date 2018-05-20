module.exports = randomQuote;

var randomQuote = require("./RandomQuote");

function randomQuote(){
    var quote = new randomQuote();

    var result = quote.getQuoteAsync().then(function(quote) {
        console.log(quote);
        return quote;
    }, function(error){
        console.log(error);
    });

}

