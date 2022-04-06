const form = document.getElementById('form');

const login = {
  username: '',
  password: '',
}

const usernameInput = document.querySelector('[name="username"]');
const passwordInput = document.querySelector('[name="password"]');

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  if(login.username === ''){
    usernameInput.style.border = '1px solid red';
    return;
  }
  
  if(login.password === ''){
    passwordInput.style.border = '1px solid red';
    return;
  }
  console.log(login);
});


function onInput(event) {
  login[event.target.name] = event.target.value;
}

usernameInput.addEventListener('input', onInput);
passwordInput.addEventListener('input', onInput);
