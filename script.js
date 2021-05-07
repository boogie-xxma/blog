function validateform() {
    var username = document.getElementById('username');
    var lastname = document.getElementById('last');
    var emailAddress = document.getElementById('email');
    var feedback = document.getElementById('feedback');

    if(username.value===""){
        alert('Please enter your Name');
        return false;
    }

    if(lastname.value===""){
    alert('Please enter your Last Name');
    return false;
    }

    if(emailAddress.value ===""){
        alert('Please enter your Email Address');
        return false;
    }

    if(feedback.value ===""){
        alert("Please enter your message");
        return false;
    }

    else{
        alert('Thank you for contacting us');
        return true;
    }
    
}
 