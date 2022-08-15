$('.form-control').addClass('form-control-sm')

$(function() {
    $('.btn-view').click(function() {
        let type, html;
        if ($(this).attr('data') === 'text') {
            type = 'password';
            html = '<i class="bi bi-eye-fill">';
        } else {
            type = 'text';
            html = '<i class="bi bi-eye-slash-fill">';
        }
        let input = $($(this).attr('data-target'));
        input.prop('type', type);
        $(this).attr('data', type);
        $(this).html(html);
    });

    $('.btn-confirm').click(function() {
        $('#modal-configuracoes').modal('show');
        let element = $(this);
        $('#element-name').html(element.attr('data'));
        $('#safe-name').html(element.attr('data'));
        $('#element-content').html(`Confirma alteração de <b>${element.attr('data')}</b>?`);
    });

    $('#btn-save').click(function() {
        $('#modal-configuracoes').modal('hide');
        $('#modal-safe').modal('show');
    });
})