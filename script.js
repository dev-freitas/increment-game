
window.incrementValue = 0;

function showIncrementedValue() {
    let valueOutput = document.querySelector('.incrementor-container h1[incremented-value]')
    valueOutput.innerHTML = window.incrementValue;
}

function increment() {
    window.incrementValue = window.incrementValue +1;
    showIncrementedValue();
}

function resetIncrement() {
    window.incrementValue = 0;
    showIncrementedValue();
}

document.addEventListener('DOMContentLoaded', function() {
    showIncrementedValue();

    let decrementor = document.querySelector('button[decrement-action="decrement"]');
    decrementor.addEventListener('click', (event) => {
        window.incrementValue = window.incrementValue -1;
        showIncrementedValue();
    });
});

function calculate () {
    let errorMessage = document.querySelector('.error-message')
    errorMessage.innerHTML = '';

    let operator = document.querySelector('input[name="operator"]:checked');

    if(!operator) {
        errorMessage.innerHTML = 'Por favor, selecione um operador';
        return;
    }

    let operatorValue = operator.value

    if (!['plus', 'minus', 'division', 'multiply'].includes(operatorValue)) {
        errorMessage.innerHTML = 'Por favor, selecione um operador valido';
        return;
    }

    let no1 = document.querySelector('#no1').value;
    let no2 = document.querySelector('#no2').value;

    let result;

    if (operatorValue == "plus") {
        result = parseFloat(no1) + parseFloat(no2);
    } else if (operatorValue == "minus") {
        result = parseFloat(no1) - parseFloat(no2);
    } else if (operatorValue == "division") {
        result = parseFloat(no1) / parseFloat(no2);
    } else {
        result = parseFloat(no1) * parseFloat(no2);
    }

    console.table({result: result, no1: no1, no2: no2});

    document.querySelector('#result').innerHTML = result;
}


document.querySelector('form#calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Capturado evento do formulário')
    calculate();

    // event.target.submit();
});
