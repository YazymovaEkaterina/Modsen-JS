function testVariables() {
    // Блок кода
    {
        // Объявление переменной x с помощью var
        var xVar = 'variable declared with var';
        // Объявление переменной x с помощью let
        let xLet = 'variable declared with let';
        // Объявление переменной x с помощью const
        const xConst = 'variable declared with const';

        // Доступ к переменным внутри блока кода
        console.log(xVar);  // Доступно
        console.log(xLet);  // Доступно
        console.log(xConst);  // Доступно
    }

    // Доступ к переменным вне блока кода
    console.log(xVar);  // Доступно
    console.log(xLet);  // Недоступно, вызовет ошибку ReferenceError
    console.log(xConst);  // Недоступно, вызовет ошибку ReferenceError
}

testVariables();
