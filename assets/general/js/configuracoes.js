function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

$('.form-control').addClass('form-control-sm')

$('.btn-view').click(function(){
    let type, html;
    if ($(this).attr('data') === 'text'){
        type = 'password';
        html = '<i class="bi bi-eye-fill">';
    }else{
        type = 'text';
        html = '<i class="bi bi-eye-slash-fill">';
    }
    let input = $($(this).attr('data-target'));
    input.prop('type', type);
    $(this).attr('data', type);
    $(this).html(html);
});