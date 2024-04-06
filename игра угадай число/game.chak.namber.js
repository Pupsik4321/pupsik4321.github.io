let secretnum = 34;
let usernumber = 34;
function getValueFromImput(){
    console.log('функции сработала')
    usernumber = document.getElementById('inputnumber').value;
    showHelper();
}
function showHelper(){
    if (secretnum == usernumber) {
        CreateElement("Вы угадали");
    }
    else if (secretnum < usernumber){
        CreateElement('Моё число меньше')
    } else {
        CreateElement('Моё число больше')
    }
}
function CreateElement(textHelper){
    let p_helper = document.getElementById('helper');
    p_helper.innerHTML = textHelper;
    console.log(textHelper)
}