const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[type = "email"]');
const inputPassword = document.querySelector('input[type = "password"]');

const verification = (e) => {
    e.preventDefault();

    if (inputEmail.value === "" || inputPassword.value === "") {
        alert("wszystkie pola powinny zostać wypełnione");
    } else {
        let obj = {
            email: inputEmail.value,
            password: inputPassword.value,
            reset: function () {
                inputEmail.value = "";
                inputPassword.value = "";
            }
        };
        form.addEventListener("submit", obj.reset);
        console.log(obj);
      };
      
    }

form.addEventListener("submit", verification);
