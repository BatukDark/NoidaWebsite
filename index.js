console.log('we login and sign');
let signup =document.querySelector('.signup');
let signin =document.querySelector('.signin');
let login = document.querySelector('.login');
let create = document.querySelector('.create');
let cracc = document.querySelector('.cracc');


cracc.addEventListener('click',function(){
    signup.classList.add('remove');
    signin.classList.remove('remove');
});
login.addEventListener('click',function(){
    signup.classList.add('remove');
    signin.classList.remove('remove');
});

create.addEventListener('click',function(){
    signin.classList.add('remove');
    signup.classList.remove('remove');
})

