const input = document.getElementById('input');
const select = document.getElementById('weights');

const btn = document.getElementById('btn');

const output = document.getElementById('output');

btn.addEventListener('click', () => {
    let inputValue = input.value;
    if(select.value === 'Gram') {
        output.innerHTML = inputValue + "Kg " + " = " + inputValue*1000 + "g";
    } else if(select.value === 'Tonne') {
        output.innerHTML = inputValue + "Kg " + " = " + inputValue/1000 + "t";
    } else if(select.value === 'Pound') {
        output.innerHTML = inputValue + "Kg " + " = " + inputValue*2.205 + "lb";
    } else if(select.value === 'Ounce'){
        output.innerHTML = inputValue + "Kg " + " = " + inputValue*35.274 + "oz"
    } else{
        output.style.color = "red"
        output.style.fontSize = "15px"
        output.innerHTML = "Enter value or select weights"
    }
})