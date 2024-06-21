// Определение класса Person
class Person {
    // Конструктор класса, задающий начальные значения свойств name, age и country
    constructor(name, age, country) {
        this.name = name;       // Имя
        this.age = age;         // Возраст
        this.country = country; // Страна
    }

    // Метод для отображения информации о человеке
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

// Создание первого экземпляра класса Person
const person1 = new Person("John", 30, "USA");
// Вызов метода displayInfo для первого экземпляра
person1.displayInfo();

// Создание второго экземпляра класса Person
const person2 = new Person("Alice", 25, "Canada");
// Вызов метода displayInfo для второго экземпляра
person2.displayInfo();
