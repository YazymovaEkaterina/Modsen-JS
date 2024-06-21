function delayedCallback(callback) {
    setTimeout(callback, 2000); // 2000 миллисекунд = 2 секунды
}

function myCallback() {
    console.log('Callback вызван!');
}

// Вызываем delayedCallback и передаем ей функцию myCallback
delayedCallback(myCallback);
