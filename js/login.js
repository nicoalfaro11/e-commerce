document.addEventListener("DOMContentLoaded", function(){

let btn = document.getElementById('btn');
let email= document.getElementById('email');
let pass = document.getElementById('pass');

btn.addEventListener("click", function(){
    if(email.value !== '' && pass.value !== ''){
        location.href = 'index.html'
    }else{
        alert('Ingrese su usuario y contraseña para ingresar')
    }
})
});