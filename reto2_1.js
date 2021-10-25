const dns = require('dns');

const Dns = dns.lookup('google.com',(err,address,family));

console.log(Dns);
