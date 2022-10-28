const express = require('express');
const router = express.Router();
const { data } = require('/Users/alekseinecha77/Desktop/expressSimpleApp/expressJSPractice/data/flashCardData.json');
const { cards } = data;

const colors = [
    'green',
    'red',
    'yello'
];

router.get('/:id', (req, res) => {
    res.render('card', { 
        prompt: cards[req.params.id].question, colors,
        hint: cards[req.params.id].hint
    });
});

module.exports = router;