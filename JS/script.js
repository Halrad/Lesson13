"use strict";

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}

const num = 50;

if (num < 49) {
    console.log('Too small');
} else if (num > 100) {
    console.log('Too much!');
} else {
    console.log('Ok!');
};

                    //True              //False
(num === 50) ? console.log('Ok!'): console.log('Too small'); 


const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз!');        
}
