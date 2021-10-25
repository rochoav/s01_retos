const dns = require('dns');

const Dns = dns.resolveNs('google.com','yahoo.com');

console.log(Dns);
