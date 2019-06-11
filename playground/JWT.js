//Jwt -- JSON Web Token
const jwt = require('jsonwebtoken');

var data = {
    id : 123
};

var token = jwt.sign(data, 'aman');
console.log(token);
console.log();

var decoded = jwt.verify(token, 'aman');
console.log('decoded : ' , decoded)