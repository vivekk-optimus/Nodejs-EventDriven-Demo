const router = require('express').Router();
const sale = require('./saleModel');

router.get('/create', (req, res) => {
    sale.add();
});
module.exports = router;