var txtInput;
var txtResult;
var results;

function initialize() {
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i)
         .addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    results = document.getElementById('results');

    document.getElementById('btnPlus')
         .addEventListener('click', plusClick, false);
    document.getElementById('btnMinus')
         .addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry')
         .addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
    clear();
}

function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}

function clearEntry() {
    txtInput.value = '0';
}
function plusClick() {
    var child = document.createElement('li');
    child.innerHTML = "+" + txtInput.value;
    results.appendChild(child);
    
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    
    clearEntry();
}

function minusClick() {
    var child = document.createElement('li');
    child.innerHTML = "-" + txtInput.value;
    results.appendChild(child);
    
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);

    clearEntry();
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
       this.innerText : txtInput.value + this.innerText;
}