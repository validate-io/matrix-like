'use strict';

var matrixLike = require( './../lib' );

var mat = {
	'data': new Int8Array( 10 ),
	'shape': [5,2],
	'strides': [2,1],
	'dtype': 'int8',
	'length': 10
};
console.log( matrixLike( mat ) );
// returns true

console.log( matrixLike( [] ) );
// returns false

console.log( matrixLike( {} ) );
// returns false

console.log( matrixLike( null ) );
// returns false
