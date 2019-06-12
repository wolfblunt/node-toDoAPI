var bcrypt = require('bcryptjs');

var password = 'aman123';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$30sFHMY2PUxoclW84FSkO.Ffn2VbktVCQYFjP.a/nGvq4.eZ6dAlq';

bcrypt.compare(password, hashedPassword, (err,res) => {
    console.log(res);
});