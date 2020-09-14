const logOut = document.getElementById('logOut');
const mergeAccounts = document.getElementById('mergeAccounts');
const modifyAccount = document.getElementById('modifyAccount');
const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const auth = firebase.auth();
auth.onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref('All users').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            displayNameHolder.innerHTML = dataSnapShot.val().Name;
        })
    } else {
    //   No user is signed in.
    }
});


logOut.addEventListener('click', () => {
    //signOut() is a built in firebase function responsible for signing a user out
    auth.signOut()
    .then(() => {
        window.location.replace('./index.html');
    })
    .catch(error => {
        console.error(error);
    })
})

//Go to modification page
modifyAccount.addEventListener('click', () => {
    window.location.assign('./edit.html');
});

//Go to merge accounts page
mergeAccounts.addEventListener('click', () => {
    window.location.assign('./merge.html');
});
