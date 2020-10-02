var username=document.getElementById('username');
const auth = firebase.auth();
auth.onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = firebase.database().ref('All users').child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            username.innerHTML =`<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${dataSnapShot.val().Name}<!-- user --></a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#" onclick="logOut()">Logout</a>
            </div>
        </li>`;
        })
    } else {
        username.innerHTML=`<li class="nav-item">
        <a class="nav-link" href="FireAuth/public/index.html">Login/Signup</a>
    </li>`
    }
});
function logOut(){
    auth.signOut()
    .then(() => {
        window.location.replace('./index.html');
    })
    .catch(error => {
        console.error(error);
    })
}

// emergency register
function emg_register(){
    auth.onAuthStateChanged((user)=>{
        if (user) {
        //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid;
            if(user != null){
                uid = user.uid;
            }
            window.location.assign('../emergency_form.html')
        } else {
            alert('LOGIN/SIGN UP');
            window.location.assign('FireAuth/public/index.html');
        }
    });
}

// individual register
function ind_register(){
    auth.onAuthStateChanged((user)=>{
        if (user) {
        //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid;
            if(user != null){
                uid = user.uid;
            }
            window.location.assign('../individual.html')
        } else {
            alert('LOGIN/SIGN UP');
            window.location.assign('FireAuth/public/index.html');
        }
    });
}

// organization register
function org_register(){
    auth.onAuthStateChanged((user)=>{
        if (user) {
        //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid;
            if(user != null){
                uid = user.uid;
            }
            window.location.assign('../organise.html')
        } else {
            alert('LOGIN/SIGN UP');
            window.location.assign('FireAuth/public/index.html');
        }
    });
}