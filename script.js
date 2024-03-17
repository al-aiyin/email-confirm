const emailInput = document.getElementById('input-field');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const massage = document.getElementById('massage');
 
document.getElementById('btn').addEventListener('click', function() {
    if (!emailInput.value.match(emailRegex)) {
        massage.innerHTML = "Please input a valid email";
        return false;
    } else {
        window.location.href = '../page2.html';
        return true;
    }
})