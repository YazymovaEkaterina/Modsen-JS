// Класс "Employee" (Сотрудник) с основными свойствами и методами
class Employee {
    // Конструктор для инициализации свойств имени и зарплаты сотрудника
    constructor(name, salary) {
        this.name = name; // Имя сотрудника
        this.salary = salary; // Месячная зарплата сотрудника
    }

    // Метод для расчета годовой зарплаты сотрудника
    calculateAnnualSalary() {
        return this.salary * 12; // Годовая зарплата = месячная зарплата * 12 месяцев
    }
}

// Класс "Manager" (Менеджер), который наследуется от класса "Employee"
class Manager extends Employee {
    // Конструктор для инициализации свойств имени, зарплаты, отдела и бонуса менеджера
    constructor(name, salary, department, bonus) {
        super(name, salary); // Вызов конструктора родительского класса Employee
        this.department = department; // Отдел, в котором работает менеджер
        this.bonus = bonus; // Годовой бонус менеджера
    }

    // Переопределенный метод для расчета годовой зарплаты менеджера, включая бонус
    calculateAnnualSalary() {
        return (this.salary * 12) + this.bonus; // Годовая зарплата = (месячная зарплата * 12) + бонус
    }
}

// Создаем два экземпляра класса Manager с разными данными
const manager1 = new Manager('Alice', 5000, 'Sales', 10000); // Менеджер по продажам с бонусом
const manager2 = new Manager('Bob', 6000, 'Marketing', 15000); // Менеджер по маркетингу с бонусом

// Рассчитываем и выводим их годовую зарплату в консоль
console.log(`Годовая зарплата ${manager1.name}: $${manager1.calculateAnnualSalary()}`); // Годовая зарплата Alice
console.log(`Годовая зарплата ${manager2.name}: $${manager2.calculateAnnualSalary()}`); // Годовая зарплата Bob
