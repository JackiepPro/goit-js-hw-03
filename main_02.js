//Задание 2 - done
//SНапиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
// const user = {

const countProps = function(obj) {
  // твой код
 const values = Object.values(obj);
 	return `${values.length}`
};

 
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3