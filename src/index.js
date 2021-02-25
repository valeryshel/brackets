module.exports = function check(str, bracketsConfig) {
    const collection = bracketsConfig.map( el => el.join("") ); // получаем набор скобок вида () [] {}  и т.п.

    for (let i = 0; i < collection.length; i++) {
      if( str.includes(collection[i]) ) {// проверка на совпадающие элементы
        str = str.replace(collection[i], ""); // замена совпадающих элементов на пустую строку
        i = -1;
      }
    }
    return  !str; // если в str что-то останется вернется false
}
