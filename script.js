
function sendMail() {
    let parms = {
        name : document.getElementById("name-contact").value,
        email : document.getElementById("email-contact").value,
        message : document.getElementById("message-contact").value,
    }

    if (isset($_POST['username']) && $_POST['username'] !== '') {
    exit('This is spam');
    }

    emailjs.send("service_pw7rasg", "template_zizlcti", parms).then(alert("Email Sent!"));
}
