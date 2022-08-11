$('#btn-login').click(function () {
    let iusuario = $('#username').val(), isenha = $('#password').val();

    let response = []

    $.get(`https://marcustera.pythonanywhere.com/user/?usuario=${iusuario}&senha=${isenha}`, function(data){
        console.log(data);
        if (data.length == 1) window.location.href = '../templates/cursoin.html';
        else $('#login-error').html('<span style="color: red">Usuário ou senha incorretos.</span>')
    });   
    
});