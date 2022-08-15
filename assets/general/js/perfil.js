$('.form-control').addClass('form-control-sm')


$(function(){
    $('#cep').inputmask("99.999-999"); 
});


$('#find-cep').click(function (){
    $.get(`https://viacep.com.br/ws/${$("#cep").inputmask("unmaskedvalue")}/json/`, (function(data){
        console.log(data);
        if (data.cep) {
            $('#logradouro').val(data.logradouro);
            $('#uf').val(data.uf);
            $('#city').val(data.localidade);
            $('#neighborhood').val(data.bairro);
            $('#cepError').val('');
        } else {
            $('input[type=text]').val('');
            $('#cepError').val('CEP não encontrado');
        }
    }));    
});
