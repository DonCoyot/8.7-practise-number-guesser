//let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 1 ;

let minValue 
let maxValue 

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

let answerNumber  = Math.floor((minValue + maxValue) / 2);

function textnumber(answerNumber){
    const
        h = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        t = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        o = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        p = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let str = answerNumber.toString(), out = '';

    if(str.length == 1) return o[answerNumber-1];
    else if(str.length == 2){
        if(str[0] == 1) out = p[parseInt(str[1])-1];
        else out = (t[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):''));
    }
    else if(str.length == 3){
        out = (h[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + t[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + o[parseInt(str[2])-1]):''));
    }

    let arr = out.split('');
    arr[0] = arr[0].toUpperCase();
    out = arr.join('');
    return out;
}

let answerVar = [`Наверное, ${answerNumber}? `, `Вангую, что это ${answerNumber}?`, `Возможно, ${answerNumber}`]
let randomPick = answerVar[Math.floor(Math.random() * answerVar.length)];
let randomPicktext = textnumber(answerNumber)

answerField.innerText = "Введите числа и нажмите Принять";


document.getElementById('acceptNum').addEventListener('click', (event) => {
    
    minValue = parseInt(document.getElementById('minNum').value) || 1 ;
    minValue > 999 ? 
    (minValue = 999) :
    (minValue = minValue);
    
    minValue < -999 ? 
    (minValue = -999) :
    (minValue = minValue);

    console.log(minValue)

    maxValue = parseInt(document.getElementById('maxNum').value) || 99 ;
    maxValue > 999 ? 
    (maxValue = 999) :
    (maxValue = maxValue);

     maxValue < -999 ? 
    (maxValue = -999) :
    (maxValue = maxValue);
    console.log(maxValue)

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerVar = [`Наверное, ${answerNumber}? `, `Вангую, что это ${answerNumber}?`, `Возможно, ${answerNumber}`]
    randomPick = answerVar[Math.floor(Math.random() * answerVar.length)];
    randomPicktext = textnumber(answerNumber)

    answerField.innerText = randomPicktext.length < 20 ? randomPicktext + "?" : randomPick ;

    document.getElementById('minNum').value = "";
    document.getElementById('maxNum').value = ""; 

    orderNumber = 1;
    orderNumberField.innerText = orderNumber;

    gameRun = true;
    event.preventDefault();

})

/*/document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 1 ;

    minValue > 999 ? 
    (minValue = 999) :
    (minValue = minValue);
    
    minValue < -999 ? 
    (minValue = -999) :
    (minValue = minValue);

    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 99 ;

    maxValue > 999 ? 
    (maxValue = 999) :
    (maxValue = maxValue);

     maxValue < -999 ? 
    (maxValue = -999) :
    (maxValue = maxValue);

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    orderNumber = 1;
    gameRun = true;
})
/*/
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           // answerField.innerText = `Вы загадали число ${answerNumber }?`;
           answerVar = [`Наверное, ${answerNumber}? `, `Вангую, что это ${answerNumber}?`, `Возможно, ${answerNumber}`]
           randomPick = answerVar[Math.floor(Math.random() * answerVar.length)];
           randomPicktext = textnumber(answerNumber)
           answerField.innerText = randomPicktext.length < 20 ? randomPicktext + "?" : randomPick ;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           // answerField.innerText = `Вы загадали число ${answerNumber }?`;
           answerVar = [`Наверное, ${answerNumber}? `, `Вангую, что это ${answerNumber}?`, `Возможно, ${answerNumber}`]
           randomPick = answerVar[Math.floor(Math.random() * answerVar.length)];
           randomPicktext = textnumber(answerNumber)
           answerField.innerText = randomPicktext.length < 20 ? randomPicktext + "?" : randomPick ;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let finishVar = [`Так то! `, `Магия!`, `Я хорош!`]
        let finishrandom = finishVar[Math.floor(Math.random() * finishVar.length)];
        answerField.innerText = finishrandom;
        gameRun = false;
    }
})

