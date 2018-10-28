// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (A03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output



QUnit.test('Testing of Loan calculation', function (assert) {
    assert.deepEqual(computeLoan(-1,-2,-1), [-1,-2,-1], 'Please enter a vaild number');
    assert.deepEqual(computeLoan2(100,10,12), [10.00,0.83,110.00] ,'Loan Calculation with smaller numbers');
    assert.deepEqual(computeLoan2(150000,12,36), [54000.00,1500.00,204000.00] ,'Loan Calculation with larger value ');
    assert.throws(function () {computeLoan3(null,null,3); }, new Error('The given argument is not a number'), 'Passing a null value raises an Error');

});









