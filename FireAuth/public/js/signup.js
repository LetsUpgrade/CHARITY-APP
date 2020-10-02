const mailField = document.getElementById('mail');
const passwordField = document.getElementById('password');
const displayNameField = document.getElementById('displayName');
const photoField = document.getElementById('photo');
const labels = document.getElementsByTagName('label');
const signUp = document.getElementById('signUp');
const failureModal = document.querySelector('.failure');


const auth = firebase.auth();
//auth.languageCode = 'fr_FR'; //Sending verification emails only in french

//Sends verification emails in the same language as the language used in the
//user's device
auth.useDeviceLanguage();

//Function wrapping all the signup parts including the email verification email
//triggered once the user clicks on the signup button
const signUpFunction = () => {
    
    const email = mailField.value;
    const password = passwordField.value;
    var name= document.getElementById('userName').value;
    var contact= document.getElementById('userContact').value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        var user =auth.currentUser;
        var uid;
        if(user!=null){
            uid=user.uid;
        }
        var ref= firebase.database().ref('All users');
        var userData={
            Name: name,
            Contact: contact,
            Email: email,
            Password: password,
            Donation:0,
        }
        ref.child(uid).set(userData);
        console.log('Signed Up Successfully !');
        sendVerificationEmail();
    })
    .catch(error => {
        console.error(error);
        //Shows a modal as feedback if there's an error
        failureModal.style.display = 'flex';
        setTimeout(()=>{
            failureModal.style.display = 'none';
        }, 1000);
    })
}

//Function called right after the signUpWithEmailAndPassword to send verification emails
const sendVerificationEmail = () => {
    //Built in firebase function responsible for sending the verification email
    auth.currentUser.sendEmailVerification()
    .then(() => {
        console.log('Verification Email Sent Successfully !');
        //redirecting the user to the profile page once everything is done correctly
        window.location.assign('../../index.html');
    })
    .catch(error => {
        console.error(error);
    })
}

signUp.addEventListener('click', signUpFunction);

// document.getElementById('userInfo').addEventListener('click', () => {
//     console.log(auth.currentUser)
// })

//Animations
// mailField.addEventListener('focus', () => {
//     labels.item(0).className = "focused-field";
// });

// passwordField.addEventListener('focus', () => {
//     labels.item(1).className = "focused-field";
// });

// mailField.addEventListener('blur', () => {
//     if(!mailField.value)
//         labels.item(0).className = "unfocused-field";
// });

// passwordField.addEventListener('blur', () => {
//     if(!passwordField.value)
//         labels.item(1).className = "unfocused-field";
// });