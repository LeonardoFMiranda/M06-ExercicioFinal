const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates')

router.get('/', (req,res) =>{
    res.sendFile(`${basePath}/index.html`)
})

router.get('/contato', (req, res) => {
    res.sendFile(path.join(basePath, 'contato.html'));
  });
module.exports = router; // Esta linha deve estar no final do arquivo
