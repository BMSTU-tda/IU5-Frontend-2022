/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    let flag = true;
    let NewStr = str.split("").reverse().join("");
    if (str !== NewStr)
        flag = false;
    return flag;
}

module.exports = isPalindrome;
