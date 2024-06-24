class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Метод для вычисления площади прямоугольника
    calculateArea() {
        return this.width * this.height;
    }

    // Метод для вычисления периметра прямоугольника
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Создаем экземпляр класса Прямоугольник
const rectangle = new Rectangle(5, 10);

// Вычисляем площадь и периметр прямоугольника
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log(`Площадь прямоугольника: ${area}`);
console.log(`Периметр прямоугольника: ${perimeter}`);
