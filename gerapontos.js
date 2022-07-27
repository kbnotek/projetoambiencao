function gerarPonto() {
    document.getElementById("nota").innerHTML = Math.random();
    
    var login = window.sessionStorage.getItem('login');
    document.getElementById("login").innerHTML = login;

}