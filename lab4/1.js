/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    const result = [];
    const key = [];
    arr.map((current, index) => 
    {
        let checker = current.toLowerCase().split('').sort().join('');
        if (key.indexOf(checker) === -1) {
            key.push(checker);
            result.push([]);
        }
    }  );
    arr.map((current, index) => 
    {
        let id = key.indexOf(current.toLowerCase().split('').sort().join(''));
        if (id != -1) {
            result[id].push(current); 
        }
    }  );
    return result;
}
module.exports = getAnagramms;
