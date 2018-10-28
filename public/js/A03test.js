// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output



QUnit.test('Testing of Loan calculation', function (assert) {
    assert.equal(computeLoan(-1,-2,-1), [-1,-2,-1], 'Please enter a vaild number');
    assert.deepEqual(computeLoan2(100,10,12), [0.83,10.00,110.00] ,'Loan Calculation');
    assert.deepEqual(computeLoan3("", "", ""),null , 'Please enter a vaild number greater than 0.');
    
});

// QUnit.test('Testing our is Odd function four times', function (assert) {
//     assert.ok(isOdd(5), '5 is odd');
//     assert.ok(!isOdd(2), '5 is not odd');
//     assert.ok(!isOdd(0), '0 is not odd');
//     //throws( block                            [, expected ] [, message ] ) 
//     assert.throws(function () { isOdd(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
//     assert.throws(function () { isOdd([]); }, new Error('The given argument is not a number'), 'Passing in array correctly raises an Error');
// });








