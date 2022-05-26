// elements

// misc
const input = document.querySelector(".input-c");
const clear = document.querySelector("#clear");

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
let inputBool = false;
let lastAnswer = 0;
let divide = false;
let multiply = false;
let subtract = false;
let add = false;

numbers.forEach(num => 
{
    num.addEventListener('click', () => 
    {
        if (inputBool == false)
        {
            input.innerText == '0' ? input.textContent = num.textContent : input.textContent += num.textContent;
            inputStream[0] = parseInt(input.textContent);
            console.log(inputStream[0]);
        }
        else
        {
            input.innerText = "";
            input.innerText == '0' ? input.textContent = num.textContent : input.textContent += num.textContent;
            inputStream[2] = parseInt(input.textContent);
            console.log(inputStream[2]);
            inputBool = false;
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
        inputBool = true;
        inputStream[1] = op.innerText;
        console.log(inputStream[1]);
        operators.forEach(opp => 
        {
            opp != op ? opp.classList.remove('selected') : opp.classList.add('selected');
        })
    });
})

equals.addEventListener('click', () => 
{

});

