const crypto = require('crypto');

const palabra = 'secreta';
const hash = crypto.createHmac('sha256',palabra)


console.log(hash);
