const {SHA256} = require('crypto-js');

var message = 'I am user number 7';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash ${hash}`);

console.log('------------------------------------------------');

var data = {
    id: 7
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

token.data.id = 3;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if(resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Dont trust the data');
}