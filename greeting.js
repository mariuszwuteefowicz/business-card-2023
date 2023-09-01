const greet = (name, age) => {
    const result = `Witaj ${name}! Masz ${age} lat!`;
return     result;
}

const greeting = greet('Maciek', 35);
console.log(greeting)
console.log(greet('Karolina', 31))