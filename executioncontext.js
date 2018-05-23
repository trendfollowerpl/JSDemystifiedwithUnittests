const greet = 'Hello!';

function showGreet() {
    console.log(this.greet);
}

const casualGreet = { greet: 'Hey!' };

showGreet(); // node: undefined
showGreet.bind(casualGreet)(); //Hey
showGreet.call(casualGreet);
showGreet.apply(casualGreet);