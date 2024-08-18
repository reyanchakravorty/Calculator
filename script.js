let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.id;
        switch (value) {
            case 'ac':
                calculation = '';
                display.value = '';
                break;
            case 'equal':
                try {
                    display.value = eval(calculation);
                    calculation = display.value;
                } catch (error) {
                    display.value = 'Error';
                }
                break;
            default:
                if (value === 'add') {
                    calculation += '+';
                } else if (value === 'subtract') {
                    calculation += '-';
                } else if (value === 'multiply') {
                    calculation += '*';
                } else if (value === 'divide') {
                    calculation += '/';
                } else if (value === 'mod') {
                    calculation += '/100*';
                } else if (value === 'square') {
                    calculation += '**2';
                } else {
                    calculation += value;
                }
                display.value = calculation;
        }
    });
});