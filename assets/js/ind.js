var firebaseConfig = {
    apiKey: "AIzaSyDQRPjwzQY6wO1e0oxQMamKRPW7td_wQbs",
    authDomain: "charity-app-e31cc.firebaseapp.com",
    databaseURL: "https://charity-app-e31cc.firebaseio.com",
    projectId: "charity-app-e31cc",
    storageBucket: "charity-app-e31cc.appspot.com",
    messagingSenderId: "233446000003",
    appId: "1:233446000003:web:d253ffd11f923d21a422b6",
    measurementId: "G-NJ0H9ZQ056"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

var keys;

var loader = document.getElementById('loader');
loader.style.display = "none";

var org_proof = document.getElementById('uploadbutton1');
var org_img = document.getElementById('uploadbutton2');
var head_proof = document.getElementById('uploadbutton3');
var org_head_proof = document.getElementById('uploadbutton4');
var folder = ["org_proof", "org_img", "head_proof", "org_head_proof"];

const name = document.getElementById('name');
const add = document.getElementById('add');
// const state = document.getElementById('state');
// const country = document.getElementById('country');
const qual = document.getElementById('qual');
const occ = document.getElementById('occ');
const money = document.getElementById('need');
const head = document.getElementById('head');
const occhead = document.getElementById('occhead');
const income = document.getElementById('income');
const email = document.getElementById('email');
const mobile_num = document.getElementById('mobile_num');
// const para = document.getElementById('para');

const usersRef = database.ref('Individual');
const autoId = usersRef.push().key;
const auth = firebase.auth();
var uid;
var storageRef = firebase.storage();


org_proof.onchange = function () {
    if (this.files[0].size > 512000) {
        alert("File is too big!,it should be less than 500kb");
        this.value = "";
    };
};
org_img.onchange = function () {
    if (this.files[0].size > 512000) {
        alert("File is too big!,it should be less than 500kb");
        this.value = "";
    };
};
head_proof.onchange = function () {
    if (this.files[0].size > 512000) {
        alert("File is too big!,it should be less than 500kb");
        this.value = "";
    };
};
org_head_proof.onchange = function () {
    if (this.files[0].size > 512000) {
        alert("File is too big!,it should be less than 500kb");
        this.value = "";
    };
};


auth.onAuthStateChanged((user) => {
    if (user) {
        //   User is signed in.
        let user = firebase.auth().currentUser;

        if (user != null) {
            uid = user.uid;
        }
    } else {
        alert('null');
    }
});

async function push_data() {
    loader.style.display = "block";
    usersRef.child(autoId).set({
        ID: `Individual/${autoId}`,
        ind_name: name.value,
        ind_add: add.value,
        //state_name: state.value,
        // country_name: country.value,
        qual_name: qual.value,
        occ_name: occ.value,
        money_name: money.value,
        head_name: head.value,
        occhead_name: occhead.value,
        income_name: income.value,
        email_name: email.value,
        mobile_numb: mobile_num.value,
        // para_name: para.value,

        user_id: uid,
        status: 'under verification',
        fund: 0,
    });
    let firebaseRefKey = firebase.database().ref('All users').child(uid).child('Individual');
    firebaseRefKey.child(autoId).set({ status: 'under verification' });


    for (i = 0; i < 4; i++) {
        await putStorageItem(folder[i]).then((res) => {
            console.log(res);
        })
    }
    alert("Thanks for registration, its under verification");
    window.location.replace('../index.html');
}

async function putStorageItem(item) {
    return new Promise(function (resolve, reject) {
        var upload = storageRef.ref(`images/${autoId}/${item}`).put(window[item].files[0]);
        upload.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("upload is " + progress + " done.");
        }, function (error) {
            document.write(error.message);
            reject(error);
        }, function () {
            upload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                usersRef.child(autoId).update({ [item]: downloadURL });
                resolve("done !");
            });
        }
        );

    });
}

function org_reg() {
    if (org_proof.value == "" || org_img.value == "" || head_proof.value == "" || org_head_proof.value == "") {
        alert('Upload Document');
    }
    else {
        push_data();
    }
}