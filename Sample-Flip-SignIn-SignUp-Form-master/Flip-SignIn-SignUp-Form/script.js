var left=document.querySelector('.left');
var right=document.querySelector('.right');
var signUp=document.querySelector('.SignUpBtn');
var signIn=document.querySelector('.SignInBtn');
signUp.addEventListener('click',function(){
	left.classList.add('flip');
	right.classList.add('flip');
});
signIn.addEventListener('click',function(){
	left.classList.remove('flip');
	right.classList.remove('flip');
});