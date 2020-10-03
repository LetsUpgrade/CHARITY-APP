const mailField = document.getElementById('mail');
const labels = document.getElementsByTagName('label');
const successModal = document.querySelector('.success');
const failureModal = document.querySelector('.failure');

function resetPassword(){
    firebase.auth().sendPasswordResetEmail(mailField.value);
}

//Animations
mailField.addEventListener('focus', () => {
    labels.item(0).className = "focused-field";
});

mailField.addEventListener('blur', () => {
    if(!mailField.value)
        labels.item(0).className = "unfocused-field";
});