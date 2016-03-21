function cancelLogin() {
    location.assign('index.html');
}

function registerUser() {
    location.assign('register.html');
}



function onComplete (error, authData) {
    if (error) {
    alert('Login Failed! ', error);
  } else {
    alert('User logged in');
    location.assign('index.html');
  }
}




function loginUser() {
    var emailAccount = $('#emailAddress').val();
    var passwrd = $('#password').val();
    
    var ref = new Firebase('https://basedemo.firebaseio.com');
    
    ref.authWithPassword({
        email: emailAccount,
        password: passwrd
    
    },
        onComplete
    );
}

$('#loginButton').click(loginUser);
$('#registerButton').click(registerUser);
$('#cancelButton').click(cancelLogin);