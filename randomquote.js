
var https = require('https')

class Quote{ 
    constructor(){
        this.quote = '';
        this.author = '';
        this.category = '';
    }
}

class RandomQuote {

    getQuote() {
        https.get('https://talaikis.com/api/quotes/random/', (res) => {
              res.on('data', (json) => {
                var quote = JSON.parse(json);
                return quote;
            });
        }).on('error', (e) => {
            console.error(e);
        });
    }

    getQuoteAsync() {
        var promise = new Promise((resolve, reject)=>{
            https.get('https://talaikis.com/api/quotes/random/', (res) => {
                res.on('data', (json) => {
                  var quote = JSON.parse(json);
                  resolve(quote)
                });
            }).on('error', (e) => {
                reject(e)
            });
        });

        return promise;
    }
}

module.exports = RandomQuote;
//module.exports = Quote;