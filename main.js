// elements

// misc
const input = document.querySelector(".input-c");
const clear = document.querySelector("#clear");
const decimalB = document.querySelector("#decimal");

// operators
const posneg = document.querySelector("#posneg");
const mod = document.querySelector("#mod");
const divideB = document.querySelector("#divide");
const multiplyB = document.querySelector("#multiply");
const subtractB = document.querySelector("#subtract");
const addB = document.querySelector("#add");
const equals = document.querySelector("#equals");

const operators = document.querySelectorAll("[data-op]");

//numbers
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const numbers = document.querySelectorAll("[data-num]");

let inputStream = [0];
let currentIndex = 0;
let answer = 0;
let operator = false;
let decimal = false;

numbers.forEach(num => 
{
    num.addEventListener('click', () => 
    {
        if (!operator)
        {
            input.innerText == "0" || input.innerText == "Infinity" || input.innerText == "NaN" || input.innerText == "lol" || input.innerText == "error" || inputStream[0] == answer ? input.textContent = num.textContent : input.textContent += num.textContent;
            inputStream[0] = input.textContent;
            currentIndex = 0;
            console.log(inputStream[0]);
        }
        else
        {
            decimal ? inputStream[0] = parseFloat(inputStream[0]) : inputStream[0] = parseInt(inputStream[0]);
            decimal = false;

            input.innerText = "";
            input.innerText == '0' ? input.textContent = num.textContent : input.textContent += num.textContent;
            inputStream[2] = input.textContent;
            currentIndex = 2;
            console.log(inputStream[2]);
            operator = false;
        }
    });
})

operators.forEach(op => 
{
    op.addEventListener('mouseenter', () => 
    {
        op.classList.add('opHover');
    });

    op.addEventListener('mouseleave', () => 
    {
        op.classList.remove('opHover');
    });

    op.addEventListener('click', () => 
    {
        inputStream[1] = op.innerText;
        console.log(inputStream[1]);

        if (!operator)
        {
            operator = true;
            if (op.classList.contains('selected'))
            {
                op.classList.remove('selected');
                inputStream[1] = undefined;
                operator = false;
            }
            else
            {
                operators.forEach(opp => 
                    {
                        opp != op ? opp.classList.remove('selected') : opp.classList.add('selected');
                    });
            }
        }
        else
        {
            op.classList.remove('selected');
            inputBool = false;
        }
    });
})

equals.addEventListener('click', () => 
{
    decimal ? inputStream[2] = parseFloat(inputStream[2]) : inputStream[2] = parseInt(inputStream[2]);

    let firstNum = inputStream[0];
    let op = inputStream[1];
    let secondNum = inputStream[2];

    switch (inputStream[1])
    {
        case "÷":
            updateInput(divideFunc(firstNum, secondNum));
            if (secondNum === 0) input.textContent = "lol";
            break;
        case "×":
            updateInput(multiplyFunc(firstNum, secondNum));
            break;
        case "-":
            updateInput(subtractFunc(firstNum,secondNum));
            break;
        case "+":
            updateInput(addFunc(firstNum, secondNum));
            break;
        default:
            input.textContent = "error";
    }
    operator = false;
});

clear.addEventListener('click', () => 
{
    inputStream[0] = 0;
    input.textContent = "0";
    decimal = false;
    operator = false;

    for (let i = 1; i < 3; i++)
    {
        inputStream[i] = undefined;
    }

    operators.forEach(opp => 
        {
            opp.classList.remove('selected');
        });
})

decimalB.addEventListener('click', () =>
{
    if (!(input.textContent == 0) && !(inputStream[currentIndex] == 0) && !decimal)
    {
        input.innerText += ".";
        decimal = true;
    }
})

let updateInput = (result) =>
{
    answer = result;
    inputStream[0] = result;
    inputStream[1] = undefined;
    inputStream[2] = undefined;

    operators.forEach(opp => 
        {
            opp.classList.remove('selected');
        });

    input.textContent = +result.toFixed(2);
}

let addFunc = (x, y) => 
{
	return x + y;
}

let subtractFunc = (x, y) => 
{
	return x - y;
}

let multiplyFunc = (x, y) =>
{
    return x * y;
}

let divideFunc = (x, y) =>
{
    return x / y;
}
