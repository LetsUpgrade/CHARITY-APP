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

var keys_org,keys_emg,key_ind;

function gotData_org(data) {
    const snap = data.val();
    keys_org = Object.keys(snap); 
    console.log("keys:",keys_org)
}
function errData_org(err) {
    console.log("error");
    console.log(err);
}



function gotData_emg(data) {
    const snap = data.val();
    keys_emg = Object.keys(snap); 
    console.log("keys:",keys_emg)
}
function errData_emg(err) {
    console.log("error");
    console.log(err);
}



function gotData_ind(data) {
    const snap = data.val();
    keys_emg = Object.keys(snap); 
    console.log("keys:",keys_ind)
}
function errData_ind(err) {
    console.log("error");
    console.log(err);
}




function read_modal(k,path) {
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    if(path=="Organization"){
        const usersRef = database.ref(path);
        usersRef.on('value', (snap) => {
            var db = snap.val();
            let key = db[keys_org[k]];
            
            document.getElementById('modal-para').innerHTML=
            `        
        <div id="text_2">
            <h1> Cause Title<img src="./assets/images/orgmodal.jpeg"></h1>
            <h2>Why Should We DONATE ?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem hic suscipit in architecto nihil natus laudantium, fugiat molestias dfghdffd rdgrdfg rfgrsfg rsfgsdfg fdgsdg sdgsdgds gdhdgc quas dolorum ab tenetur at? Quasi ab, tenetur rerum nobis delectus commodi eos recusandae veniam, quidem, cupiditate ipsa. Indsvtsh fdgddf fdhggfd ergdfgvd fgdfgdf dfgdfgdsf dfgsdfgdf fdgdfgdf dfgdfgdf sdfgdfgdf dfgdf culpa quis voluptatem nisi quisquam. Illo placeat possimus, doloribus obcaecati a deserunt </p>
        </div>
          
            <div id="box_2">
  
              <h2>I Would Like To Donate</h2>
              <form >
                  <input type="text" placeholder="Donation Amount" required>
                 <button >DONATE NOW</button>
              </form>
            </div>`;
        });
    }
    if(path=="Individual"){
        const usersRef = database.ref(path);
        usersRef.on('value', (snap) => {
            var db = snap.val();
            let key = db[keys_ind[k]];
            
            document.getElementById('modal-para').innerHTML=
            `
        <div id="text_1">
            <h1> Cause Title<img src="./assets/images/emgmodal.jpeg"></h1>
            <h2>Why Should We DONATE ?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem hic suscipit in architecto nihil natus laudantium, fugiat molestias dfghdffd rdgrdfg rfgrsfg rsfgsdfg fdgsdg sdgsdgds gdhdgc quas dolorum ab tenetur at? Quasi ab, tenetur rerum nobis delectus commodi eos recusandae veniam, quidem, cupiditate ipsa. Indsvtsh fdgddf fdhggfd ergdfgvd fgdfgdf dfgdfgdsf dfgsdfgdf fdgdfgdf dfgdfgdf sdfgdfgdf dfgdf culpa quis voluptatem nisi quisquam. Illo placeat possimus, doloribus obcaecati a deserunt </p>
        </div>
          
            <div id="box_1">
  
              <h2>I Would Like To Donate</h2>
              <form >
                  <input type="text" placeholder="Donation Amount" required>
                 <button id="button">DONATE NOW</button>
              </form>
            </div>`;
        });
    }
    if(path=="Emergency"){
        const usersRef = database.ref(path);
        usersRef.on('value', (snap) => {
            var db = snap.val();
            let key = db[keys_emg[k]];

            document.getElementById('modal-para').innerHTML=
            `
        <div id="text">
            <h1> Cause Title<img src="./assets/images/emgmodal.jpeg"></h1>
            <h2>Why Should We DONATE ?</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolorem hic suscipit in architecto nihil natus laudantium, fugiat molestias dfghdffd rdgrdfg rfgrsfg rsfgsdfg fdgsdg sdgsdgds gdhdgc quas dolorum ab tenetur at? Quasi ab, tenetur rerum nobis delectus commodi eos recusandae veniam, quidem, cupiditate ipsa. Indsvtsh fdgddf fdhggfd ergdfgvd fgdfgdf dfgdfgdsf dfgsdfgdf fdgdfgdf dfgdfgdf sdfgdfgdf dfgdf culpa quis voluptatem nisi quisquam. Illo placeat possimus, doloribus obcaecati a deserunt </p>
        </div>
          
           <div id="box">
  
              <h2>I Would Like To Donate</h2>
            
              <form >
                  <input type="text" placeholder="Donation Amount" required>
                 <button >DONATE NOW</button>
              </form>
            </div>`;
        });
    }
}


function card_view(path){
    
    const usersRef = database.ref(path);
    if(path=="Organization"){
        usersRef.on('value', gotData_org, errData_org);
        usersRef.on('value', (snap) => {
            console.log(snap.val());
            var db = snap.val();
            for (i = 0; i < keys_org.length; i++) {
                let key = db[keys_org[i]];
                if(key.status=="verified"){
                    console.log(key.country_name);//access anything with name like (key.email_name... etc)
                    document.getElementById('donate-cards-cont-org').innerHTML += 
                    `                
                    <div class="col-sm-4">
                    <div class="card-box">
                        <div class="card-pic">
                            <img src="./assets/images/3.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <h4>Cause Title for which the donation tobe done</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Ducimus quod nihil doloribus inventore tempora blanditiis
                               eum qui ab nam saepe temporibus cum reiciendis nobis omnis, 
                               facilis molestiae cumque facere aliquid?</p>
                        </div>
                        <div class="card-progressbar">
            
            
            
                            <div class="row stat-row">
                                <div class="col-4 stat-col1">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Funded
                                    </div>
                                </div>
                                <div class="col-4 stat-col2">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        pledged
                                    </div>
                                </div>
                                <div class="col-4 stat-col3">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Days Remaining  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card-buttons">
                            <div class="row">
                                <div class="col-6 card-button3">
                                    <button id="Org-btn" onclick='read_modal(${i},"${path}")'>View More</button>
                                </div>
                                <div class="col-6 card-button-org">
                                    <button >Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                }
            }
        
        });
    }
    if(path=="Individual"){
        usersRef.on('value', gotData_ind, errData_ind);
        usersRef.on('value', (snap) => {
            console.log(snap.val());
            var db = snap.val();
            for (i = 0; i < keys_ind.length; i++) {
                let key = db[keys_ind[i]];
                if(key.status=="verified"){
                    console.log(key.country_name);//access anything with name like (key.email_name... etc)
                    document.getElementById('donate-cards-cont-ind').innerHTML += 
                    `
                    <div class="col-sm-4">
                    <div class="card-box">
                        <div class="card-pic">
                            <img src="./assets/images/2.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <h4>Cause Title for which the donation tobe done</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus quod nihil doloribus inventore tempora blanditiis
                            eum qui ab nam saepe temporibus cum reiciendis nobis omnis, 
                            facilis molestiae cumque facere aliquid?</p>
                        </div>
                        <div class="card-progressbar">
            
            
            
                            <div class="row stat-row">
                                <div class="col-4 stat-col1">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Funded
                                    </div>
                                </div>
                                <div class="col-4 stat-col2">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        pledged
                                    </div>
                                </div>
                                <div class="col-4 stat-col3">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Days Remaining  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card-buttons">
                            <div class="row">
                                <div class="col-6 card-button2">
                                    <button id="Ind-btn" onclick='read_modal(${i},"${path}")'>View More</button>
                                </div>
                                <div class="col-6 card-button-ind">
                                    <button >Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>`;
                }
            }
        
        });
    }
    if(path=="Emergency"){
        usersRef.on('value', gotData_emg, errData_emg);
        usersRef.on('value', (snap) => {
            console.log(snap.val());
            var db = snap.val();
            
            for (i = 0; i < keys_emg.length; i++) {
                let key = db[keys_emg[i]];
                if(key.status=="verified"){
                    console.log(key.country_name);//access anything with name like (key.email_name... etc)
                    document.getElementById('donate-cards-cont-emg').innerHTML += 
                    `
                    <div class="col-sm-4">
                    <div class="card-box">
                        <div class="card-pic">
                            <img src="./assets/images/1.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <h4>Cause Title for which the donation tobe done</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                               Ducimus quod nihil doloribus inventore tempora blanditiis
                               eum qui ab nam saepe temporibus cum reiciendis nobis omnis, 
                               facilis molestiae cumque facere aliquid?</p>
                        </div>
                        <div class="card-progressbar">



                            <div class="row stat-row">
                                <div class="col-4 stat-col1">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Funded
                                    </div>
                                </div>
                                <div class="col-4 stat-col2">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        pledged
                                    </div>
                                </div>
                                <div class="col-4 stat-col3">
                                    <div class="stat">
                                        12000
                                    </div>
                                    <div class="stat-dis">
                                        Days Remaining  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="card-buttons">
                            <div class="row">
                                <div class="col-6 card-button1">
                                    <button id="Emg-btn" onclick='read_modal(${i},"${path}")'>View More</button>
                                </div>
                                <div class="col-6 card-button-emg">
                                    <button >Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                }
                    
            }
        
        });
    }
}
card_view('Emergency');
card_view('Individual');
card_view('Organization');