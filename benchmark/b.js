'use strict';

// MODULES //

var matrixLike = require( './../lib' );


// VARIABLES //

var matrix,
	start,
	stop,
	len,
	res,
	b,
	i;

matrix = {};
matrix.data = new Int8Array( 10 );
matrix.shape = [5,2];
matrix.strides = [2,1];
matrix.ndims = 2;
matrix.nbytes = 10;
matrix.dtype = 'int8';
matrix.length = 10;


// FUNCTIONS //

var toStr = Object.prototype.toString;


// --------------------------------------
// WARM-UP

len = 1e6;
for ( i = 0; i < len; i++ ) {
	i = i;
}


// --------------------------------------
// BENCHMARK

len = 1e6;
res = new Array( 1 );

// Control:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = ( toStr.call( matrix ) === '[object Object]' );
}
stop = process.hrtime( start );

res[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

// Test:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = matrixLike( matrix );
}
stop = process.hrtime( start );

res[ 1 ] = stop[ 0 ] + stop[ 1 ]*1e-9;


// --------------------------------------
// RESULTS

console.log( 'ctrl:\t%d ops/sec', Math.floor( len/res[ 0 ] ) );
console.log( 'test:\t%d ops/sec', Math.floor( len/res[ 1 ] ) );
console.log( '\n' );

