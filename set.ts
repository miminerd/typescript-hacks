
/** SET OBJECT **/

let mySet = new Set();

mySet.add(1);           // Set [ 1 ]
mySet.add(5);          // Set [ 1, 5 ]
mySet.add(5);          // Set [ 1, 5 ] see how we added 5 again in the set but its keeps only one unique value.
mySet.add('some text'); // Set [ 1, 5, 'some text' ]

mySet.has(1);               // true
mySet.has(3);              // false, since 3 has not been added to the set
mySet.has(5);             // true
