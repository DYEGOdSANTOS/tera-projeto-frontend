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




/*
JSON
URL: viacep.com.br/ws/01001000/json/

    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
*/