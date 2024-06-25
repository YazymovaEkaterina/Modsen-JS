// Пример использования переменных до их объявления

console.log(x); // undefined - переменная var допускает обращение до объявления
var x = 10;

try {
    console.log(y); // ReferenceError - переменная let не допускает обращение до объявления
} catch (e) {
    console.log(e); // ReferenceError: Cannot access 'y' before initialization
}
let y = 20;

try {
    console.log(z); // ReferenceError - переменная const не допускает обращение до объявления
} catch (e) {
    console.log(e); // ReferenceError: Cannot access 'z' before initialization
}
const z = 30;
