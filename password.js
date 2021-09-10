console.log('Welcome user to the Password Validator tool!!');
console.log('please enter Password');

let userPassword = prompt('password must be at least 10 characters');

if (userPassword.length >= 10){
    console.log('woohoo!! at least 10 characters achieved!')
} else {
    console.log('uh-oh, add some more characters for sweet victory!')
}

