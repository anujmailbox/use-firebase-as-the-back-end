var myRef = new Firebase('https://basedemo.firebaseio.com');

var emailAddress, passwrd, passwrdConfirm;

$('#registerForm').change(function(){
    passwrd = $('#password').val();
    passwrdConfirm = $('#password2').val();
    
    if (passwrd == passwrdConfirm) {
        $('#registerButton').removeProp('disabled');
    } else {
        $('#registerButton').prop('disabled', 'disabled');
    }
}); 


function onComplete(error, userData) {
    if (error) {
        switch (error.code) {
      case 'EMAIL_TAKEN':
        alert('The new user account cannot be created because the email is already in use.');
        break;
      case 'INVALID_EMAIL':
        alert('The specified email is not a valid email.');
        break;
      default:
        alert('Error creating user:', error);
        } 
    } else {
        alert('Successfully created user account' );
        location.assign('index.html');
    }

    
}






function registerUser() {
    emailAddress = $('#emailAddress').val();
    passwrd = $('#password').val();
    
    myRef.createUser({
        email: emailAddress,
        password: passwrd
    },  
    onComplete 

    );
}



function cancelRegister() {
    location.assign('index.html');
}

$('#registerButton').click(registerUser);
$('#cancelButton').click(cancelRegister);