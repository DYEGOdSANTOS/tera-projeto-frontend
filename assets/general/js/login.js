$('#entrar').click(function () {
    let iusuario = $('#usuario').val(), isenha = $('#senha').val();

    if (usuario.usuario === iusuario && usuario.senha === isenha) window.location = '../index.html';
    else $('#login-error').html('<span style="color: red">Usuário ou senha incorretos.</span>')
});