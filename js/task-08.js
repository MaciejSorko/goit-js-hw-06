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
            
        };
        
        console.log(obj);
        form.reset();
      };
      
    }

form.addEventListener("submit", verification);
