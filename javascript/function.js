
//slide-in-navigation

const overflowY = document.querySelector('body');
const showMenu = document.querySelector('header .mobile-menu');
const showMenuBtn = document.querySelector('header nav .ul button');
const closeBtn = document.querySelector('header .mobile-menu button');
const showMenuNav = document.querySelector('header .mobile-menu nav');

showMenuBtn.addEventListener('click', function(){
  
  if(document.body.clientWidth <= 350){
    showMenu.style.width = '70%';
  }else{
    showMenu.style.width = '350px';
  }
  
  showMenuNav.style.display = 'block';
  overflowY.style.overflowY = 'hidden';
})

closeBtn.addEventListener('click', function(){
  showMenu.style.width = '0px';
  showMenuNav.style.display = 'none';
  overflowY.style.overflowY = 'visible';
})


//Slide in form

const body = document.querySelector('body');
const logInBtn = document.querySelector('header .log-in-btn');
const closeFormBtn = document.querySelector('header .login-form .close-btn');
const showLoginForm = document.querySelector('header .login-form');
const resetForm = document.querySelector('header .login-form .reset-password');
const headerNav = document.querySelector('header nav');
const headerIntro = document.querySelector('header .header-intro');

logInBtn.addEventListener('click', function(){
  if(document.body.clientWidth <= 500){
    showLoginForm.style.width = '100%';
    resetForm.style.width = '100%';
  }else{
    showLoginForm.style.width = '500px';
    resetForm.style.width = '500px';
  }
  
  // Makes the header section unclickable when log in form section slides in.
  
  headerNav.style.filter = 'blur(5px)';
  headerIntro.style.filter = 'blur(5px)';
  headerNav.style.pointerEvents = 'none';
  headerIntro.style.pointerEvents = 'none'; 
  body.style.overflowY = 'hidden'; 
})

closeFormBtn.addEventListener('click', function(){
  showLoginForm.style.width = '0px';
  headerNav.style.filter = 'blur(0px)';
  headerIntro.style.filter = 'blur(0px)';
  headerNav.style.pointerEvents = 'all';
  headerIntro.style.pointerEvents = 'all';
  body.style.overflowY = 'visible'; 
})


// Forgot Password

const forgotBtn = document.querySelector('header .login-form .form .forgot-btn');
const cancelBtn = document.querySelector('header .login-form .reset-password .cancel-btn');
const signIn = document.querySelector('header .login-form .reset-password .sign-in');
const resetPasswordForm = document.querySelector('header .login-form .reset-password');


forgotBtn.addEventListener('click', function(){
  resetPasswordForm.style.height = '100%';
})

cancelBtn.addEventListener('click', function(){
  resetPasswordForm.style.height = '0';
})

signIn.addEventListener('click', function(){
  resetPasswordForm.style.height = '0';
})


// Below code is not written by me, i got it from online to make the website look more functional. 

//  Expand Trainers Height  

const trainers = document.querySelector('.trainers');
const expandBtn = document.querySelector('.trainers button');
const expandBtnImg = document.querySelector('.trainers button img');

expandBtn.addEventListener("click", rotateImg);

let rotation = 0;
function rotateImg() {
  trainers.classList.toggle('expand');
  rotation += 180;
  if (rotation === 180) { 
    rotation = 180;
  }
  expandBtnImg.style.transform = `rotate(${rotation}deg)`;
}


//  Scroll To Top

let mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', topFunction);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//  Animation On Scroll 

AOS.init({
  duration:1000,
  easing : 'ease',
});







