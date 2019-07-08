const request = require('request');
const express = require('express');
const app = express();

const RUBY_GEMS_URL = 'https://rubygems.org';
const PORT = 3000;

const randomize = () => {
    return Math.random().toString(36).slice(-5);    
};

/**
 * Set Access Headers for CORS
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
});

app.get('/api/**/*', (req, res) => {      
    res.setHeader('Content-Type', 'application/json');
    res.send([{
        "article-title": "Top Cities in Brazil"
    }, {
        "id": randomize(),
        "item-title": "Salvador",
        "content": "The best city evaaaa"
    }]);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'))
}

app.listen(PORT);

console.log(`Ruby Gems proxy API is now running at: http://localhost:${PORT}`); 
