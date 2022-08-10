$('#entrar').click(function () {
    let iusuario = $('#usuario').val(), isenha = $('#senha').val();

    let response = []

    $.get(`https://marcustera.pythonanywhere.com/user/?usuario=${iusuario}&senha=${isenha}`, function(data){
        console.log(data);
        if (data.length == 1) window.location.href = '../index.html';
        else $('#login-error').html('<span style="color: red">Usuário ou senha incorretos.</span>')
    });   
    
});