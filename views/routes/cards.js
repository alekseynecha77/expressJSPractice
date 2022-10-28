const express = require('express');
const router = express.Router();
const { data } = require('../../data/flashCardData.json');
const { cards } = data;

const colors = [
    'green',
    'red',
    'yello'
];

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const{ id } = req.params;
    const text = cards[id][side];
    const{ hint } = cards[id];

    const templateData = { text, hint, colors };
    res.render('card', templateData);
});

module.exports = router;