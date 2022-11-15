// Password toggle
const passwordField = document.querySelector('form .form-item input[type="password"]');
toggleButton = document.querySelector('form .password-toggle i');

toggleButton.onclick = () => {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    }else {
        passwordField.type = 'password';
    }
}
