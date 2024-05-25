const btn = document.getElementById('submit');

btn.addEventListener('click', logIn);


function logIn() {
    const Email = document.getElementById('email').value;
    const Password = document.getElementById('password').value;
    
    
  if (Email == 'rogers@gmail.com' && Password=='123456') {
    
    window.location.assign('loader.html');
    console.log('login successful');
    alert('Welcome');
  }
  else {
    console.log('wrong password');
    alert('incorrect');
  }
}

var signin = document.getElementById("sign-up");

signin.addEventListener('click', signUp);
    
    function signUp(){
      window.location.assign("signup.html");
    }
      