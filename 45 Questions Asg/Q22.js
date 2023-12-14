"use strict";
//Intentional Error: If you haven’t received an array index error in one of your
// programs yet, try to make one happen. Change an index in one of your programs to
// produce an index error. Make sure you correct the error before closing the program.
//Intentional error
var error = [1, 2, 3, 4, 5];
//Error
error[6] = 6;
console.log(error);
//Fix Error
error[5] = 6;
error[6] = 7;
console.log(error);
