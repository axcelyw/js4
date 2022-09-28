let name =prompt('Введите свое имя')
let year =+prompt('Введите свой год рождения')
let thisyear =+prompt('Введите нынешний год')



function min (thisyear, year){
    return thisyear - year; 
}



let result = min(thisyear, year);
alert(name + ' ваш возраст ' + result)





do {
    var num = +prompt('Введите количество примеров')
} while (isNaN(num) || num == 0)


function random (min, max) {
    return Math.floor(Math.random() * (max, min +1) + min)
}

let minNum = +prompt('Введите мин число:')
let maxNum = +prompt('Введите макс число:')

for (let i=0; i <10; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)

    let pr =+prompt(num1 + ' + ' + num2)
    let pr1 =+prompt(num1 + ' - ' + num2)
    let pr2 =+prompt(num1 + ' * ' + num2)
    let pr3 =+prompt(num1 + ' / ' + num2)

    console.log((num1 + num2) == pr ? 'Молодец верно' : 'Ваш ответ ' + pr + ' . Верный ответ ' + (num1 + num2));
    console.log((num1 - num2) == pr ? 'Молодец верно' : 'Ваш ответ ' + pr + ' . Верный ответ ' + (num1 - num2));
    console.log((num1 * num2) == pr ? 'Молодец верно' : 'Ваш ответ ' + pr + ' . Верный ответ ' + (num1 * num2));
    console.log((num1 / num2) == pr ? 'Молодец верно' : 'Ваш ответ ' + pr + ' . Верный ответ ' + (num1 / num2));
    
}