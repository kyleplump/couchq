const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('Search by resource ID')
});

router.get('/:query', (req, res) => {
    console.log('Search by string query');
});

export default router;