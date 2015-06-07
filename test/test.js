/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	matrixLike = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTION //

/**
* FUNCTION: create()
*	Creates an matrix-like object.
*
* @returns {Object} matrix-like object
*/
function create() {
	var matrix = {};
	matrix.data = new Int8Array( 10 );
	matrix.shape = [5,2];
	matrix.offset = 0;
	matrix.strides = [2,1];
	matrix.dtype = 'int8';
	matrix.length = 10;
	return matrix;
} // end FUNCTION create()


// TESTS //

describe( 'validate.io-matrix-like', function tests() {

	it( 'should export a function', function test() {
		expect( matrixLike ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( matrixLike( create() ) );
	});

	it( 'should negatively validate', function test() {
		var values, mat;

		values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		mat = create();
		delete mat.data;
		values.push( mat );

		mat = create();
		mat.shape = true;
		values.push( mat );

		mat = create();
		mat.offset = [];
		values.push( mat );

		mat = create();
		mat.strides = 0;
		values.push( mat );

		mat = create();
		mat.dtype = false;
		values.push( mat );

		mat = create();
		mat.length = new Number( NaN );
		values.push( mat );

		mat = create();
		mat.length = null;
		values.push( mat );

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( matrixLike( values[i] ), values[ i ] );
		}
	});

});
