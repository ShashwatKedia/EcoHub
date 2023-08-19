function subscribe(){
    let mail = document.getElementById('sigup_email').value;
    localStorage.setItem('Email',mail)
    alert("Congratulations!! You have been subscribed to our newsletter. We'll reach out to you soon.");
    let form = document.getElementById('joinus_form');
    form.reset();
}