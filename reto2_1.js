const crypto = require('crypto');

const palabra = 'secreta';
const hash = crypto.update('I lov')


console.log(hash);
