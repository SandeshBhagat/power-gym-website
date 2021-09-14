
//slide-in-navigation

const showMenu = document.querySelector('header .mobile-menu');
const showMenuBtn = document.querySelector('header nav .ul button');
const closeBtn = document.querySelector('header .mobile-menu button');
const showMenuNav = document.querySelector('header .mobile-menu nav');

showMenuBtn.addEventListener('click', function(){
  
  if(document.body.clientWidth <= 350){
    showMenu.style.width = '100%';
  }else{
    showMenu.style.width = '350px';
  }
  
  showMenuNav.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
  showMenu.style.width = '0px';
  showMenuNav.style.display = 'none';
});



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



// Expand  other blogs

const blog = document.querySelector('.blog');
const blogExpandBtn = document.querySelector('.blog .see-more button');
const loadingIcon = document.querySelector('.blog .see-more .loading-img');

blogExpandBtn.addEventListener('click', expandBlog);

function expandBlog() {
  
  blog.classList.add('expand');
  loadingIcon.style.display = 'block';
  
  // For loading effect
  window.setTimeout("loadingIcon.style.display='none';", 1500)
}