var overlay = document.getElementById("overlay");

// Buttons to 'switch' the page
var openSignInButton = document.getElementById("slide-left-button");
var openSignUpButton = document.getElementById("slide-right-button");

// The sidebars
var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");

// The forms
var signinForm = document.getElementById("sign-up-info");
var accountForm = document.getElementById("sign-in-info")

// Open the Sign In page
openSignIn = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },400);
}

// Open the Sign Up page
openSignUp = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 400);
}

// When a 'switch' button is pressed, switch page
openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);

/* Botão Show Hide Password */
function ShowHidePasswordLogin() {
  var x = document.getElementById("password-input-login");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("show-hide-img-switch").src="../assets/images/show-password.png";
  } else {
    x.type = "password";
    document.getElementById("show-hide-img-switch").src="../assets/images/hide-password.png";
  }
}

function ShowHidePasswordCadastro() {
  var x = document.getElementById("password-input-cadastro");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("show-hide-img-switch").src="../assets/images/show-password.png";
  } else {
    x.type = "password";
    document.getElementById("show-hide-img-switch").src="../assets/images/hide-password.png";
  }
}

function ShowHidePasswordConfirmCadastro() {
  var x = document.getElementById("password-confirm-input-cadastro");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("show-hide-img-switch").src="../assets/images/show-password.png";
  } else {
    x.type = "password";
    document.getElementById("show-hide-img-switch").src="../assets/images/hide-password.png";
  }
}

function ReloadPage_Reset() {
  document.getElementById('email-input-login').value='';
  document.getElementById('email-input-cadastro').value='';
  document.getElementById('f-option').checked='checked';
}

function show1(){
  document.getElementById('sign-up-form-professores').style.display ='block';
  document.getElementById('sign-up-form-alunos').style.display ='none';
  document.getElementById('sign-up-form-outros').style.display ='none';
  document.getElementById('sign-up-form-professores').className = 'content-animation';
}

function show2(){
  document.getElementById('sign-up-form-professores').style.display = 'none';
  document.getElementById('sign-up-form-alunos').style.display = 'block';
  document.getElementById('sign-up-form-outros').style.display = 'none';
  document.getElementById('sign-up-form-alunos').className = 'content-animation';
}

function show3(){
  document.getElementById('sign-up-form-professores').style.display = 'none';
  document.getElementById('sign-up-form-alunos').style.display = 'none';
  document.getElementById('sign-up-form-outros').style.display = 'block';
  document.getElementById('sign-up-form-outros').className = 'content-animation';
}