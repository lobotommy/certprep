﻿module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected +
            '  Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength,
            'Expected string length: ' + expectedLength +
            '  Actual value: ' + txtInput.value.length);
    }
});

test("Add Test", function () {
    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtResult.value);
});


test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
         '  Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected +
         '  Actual value: ' + txtResult.value);
});

test("Clear Entry Test", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
         '  Actual value: ' + txtInput.value);
});

test("Clear Test", function () {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnClear, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' + expected +
       '  Actual value: ' + txtResult.value);
});

test("Clear entry on plus", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});

test("Clear entry on minus", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' + expected + ' Actual value: ' + txtInput.value);
});


test("Add result to list on plus", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '+10';

    equal(results.lastChild.innerHTML, expected, 'Expected value: ' + expected + ' Actual value: ' + results.lastChild.innerHTML);
});

test("Add result to list on minus", function () {
    expect(1);
    txtInput.value = '10';
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '-10';

    equal(results.lastChild.innerHTML, expected, 'Expected value: ' + expected + ' Actual value: ' + results.lastChild.innerHTML);
});