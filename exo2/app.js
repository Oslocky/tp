const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault(); 
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

if(username == 'raphael' && password == 'test'){
    alert('nom d\'utilisateur correct');
} else {
    alert('Vous n\'êtes pas connecté');
}
});