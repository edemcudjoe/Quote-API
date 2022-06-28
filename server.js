const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getQuotes, addQuotes, updateData, removeElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
    let randomQuote = getRandomElement(quotes);
    let quoteHolder = {
        quote: randomQuote
    }
    res.send(quoteHolder);
})

app.get('/api/quotes', (req, res) => {
    let quotesArray = getQuotes(req.query, quotes);
    res.send(quotesArray);
})

app.post('/api/quotes', (req, res) => {
    let newQuote = addQuotes(req.query, quotes)
    if (newQuote) {
        res.send(newQuote);
    } else {
        res.status(400).send('Bad Request')
    }
})

app.put('/api/quotes/:id', (req, res) => {
    let updatedData = updateData(req.params.id, quotes, req.query);

    if (updatedData) {
        res.send(updatedData)
    } else {
        res.status(404).send()
    }
})

app.delete('/api/quotes/:id', (req, res) => {
    let elementRemoved = removeElement(req.params.id, quotes);

    if (elementRemoved) {
        res.status(204).send('Quote removed successfully');
    } else {
        res.status(404).send()
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})