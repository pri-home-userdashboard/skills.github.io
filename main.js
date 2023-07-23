let bars = document.querySelector('#bars');
let menus = document.querySelector('.menus');

bars.onclick = () =>{
    menus.classList.toggle('collapse');
};

const c = document.querySelector('#cont');
const menus1 = document.getElementsByClassName('menus')[0];
c.onclick = () => {
  let t = menus1.getAttribute('class');
  if(t=='menus header-in-box collapse'){
     menus1.classList.toggle('collapse');
  }
}
let anchor = document.querySelectorAll('.menus  a');


for(let a = 0; a<5; a++){
  anchor[a].onclick = ()=>{
    menus.classList.toggle('collapse');
 

  }
   
}
let anchord = document.querySelectorAll('.menus a');

for(let c = 0; c<anchord.length; c++){
  anchor[c].onclick = ()=>{
    menus.classList.toggle('collapse');
  }
}

 let b  = document.querySelector('#scorllTop');

 b.onclick = ()=>{
   window.scrollTo(0,0)
 }

let dashboard =document.getElementById('dashboard');
let loginBox = document.querySelector('.login-page');
let footerloginButton = document.getElementsByClassName('footerloginButton');
let floginbtn = document.getElementById('floginbtn');
floginbtn.onclick = showLogin;
footerloginButton[0].onclick = showLogin;
dashboard.onclick = showLogin;
function showLogin(){
  loginBox.style.display = 'block'
}
let login = document.getElementById('login');
login.onclick = showLogin
    
   let xmark = document.getElementById('xmark');

   xmark.onclick = () =>{
  loginBox.style.display = 'none'
  // alert()

   }

   let email = document.getElementById('email');
   let password = document.getElementById('password');



   let loginButton = document.getElementById('btn');

   let error = document.querySelectorAll('.error');
     var username;
   loginButton.onclick = goDashboard;
   
  function goDashboard(){
    if(email.value.trim() != 'admin'){
     error[0].innerHTML = 'Wrong Username';
    }else if(password.value.trim() != 'admin'){
      error[1].innerHTML = 'Wrong Password';
    }else{
      window.open('dashboard.html')
      loginBox.style.display = 'none'
      location.reload();
    }
   }
   email.addEventListener('focus',()=>{
    window.addEventListener('keydown',function(e){
      var a =  e.key;
      if(a=='Enter'){
        goDashboard()
      }
   })
   })


