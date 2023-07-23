let nameData = 'Welcome User '
let username = document.getElementsByClassName('username');
username[0].innerHTML = `${nameData}`;
username[1].innerHTML = `${nameData}`;
let btn = document.getElementById('test');

const content = document.querySelectorAll('.content')[0];
const menus = document.getElementsByClassName('menus')[0];
content.onclick = () =>{
 let t = menus.getAttribute('class');
 if(t=='menus header-in-box collapse'){
    menus.classList.toggle('collapse');
 }
}

let b  = document.querySelector('#scorllTop');

b.onclick = ()=>{
  window.scrollTo(0,0)
}

// import { username } from "./main.js";

// alert(username)