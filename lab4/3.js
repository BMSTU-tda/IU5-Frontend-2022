/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    //code here
    let s = '';
    let result = '';
    let k = 0;
    for (let i = 0; i < str.length; i++){
        s = str[i];
        k = 1;
        while (str[i] === str[i+1] && i < str.length){
            i++;
            k++;
        } 
        result += str[i];
        if (k > 1)
            result += k;
    }
    return result;
}

module.exports = rle;
