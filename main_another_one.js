//задание 1
const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

//first option
// const sumSalaries = (salaries) => {
// 	let total = 0;

// 	const values = Object.values(salaries);

// 	for (const value of values) {
// 		total += value;
// 	}

// 	return total;
// }

//second option
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

console.log(sumSalaries(salaries)); // 650

//задание 2
let user = {
  name: 'John',
  age: 30
};

const count = (user) => {
	const values = Object.values(user);

	return values;
}

console.log(count(user)); // 2


//задание 3 ??

// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
	return str
	.split('-')
	.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
	.join('');
}

console.log(camelize("background-color") == 'backgroundColor');