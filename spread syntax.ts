

/** SPREAD SYNTAX **/

let fruits = ['Banana', 'Apple', 'Mango'];

// 'Bad Array Code 🌒'

fruits.push('Orange');
fruits.push('Grenade');

// 'Good Array Code ✅'

// Push
fruits = [...fruits, 'Orange', 'Grenade'];

// choose the index of your elements
fruits = ['Orange', ...fruits, 'Grenade'];
